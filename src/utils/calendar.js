function createCapeTownDate(dateString, timeString) {
  return new Date(`${dateString}T${timeString}:00+02:00`);
}

function formatGoogleDate(date) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Johannesburg",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);

  const values = {};

  parts.forEach((part) => {
    if (part.type !== "literal") {
      values[part.type] = part.value;
    }
  });

  return `${values.year}${values.month}${values.day}T${values.hour}${values.minute}${values.second}`;
}

function formatIcsDate(date) {
  return date
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}Z$/, "Z");
}

function escapeIcsText(value = "") {
  return String(value)
    .replace(/\\/g, "\\\\")
    .replace(/\r?\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

function getCalendarDetails(booking) {
  const startDate = createCapeTownDate(
    booking.bookingDate,
    booking.bookingTime,
  );

  const durationMinutes = Number(booking.durationMinutes) || 30;

  const endDate = new Date(startDate.getTime() + durationMinutes * 60 * 1000);

  const title = `NOIR & BLADE — ${booking.serviceName}`;

  const description = [
    "NOIR & BLADE appointment",
    `Service: ${booking.serviceName}`,
    `Barber: ${booking.barberName}`,
    `Customer: ${booking.customerName}`,
    `Phone: ${booking.customerPhone}`,
    `Email: ${booking.customerEmail}`,
    `Duration: ${durationMinutes} minutes`,
    `Booking reference: ${booking.id || "N/A"}`,
  ].join("\n");

  const location = "NOIR & BLADE, Cape Town, South Africa";

  return {
    startDate,
    endDate,
    durationMinutes,
    title,
    description,
    location,
  };
}

export function openGoogleCalendar(booking) {
  const details = getCalendarDetails(booking);

  const googleStart = formatGoogleDate(details.startDate);
  const googleEnd = formatGoogleDate(details.endDate);

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: details.title,
    dates: `${googleStart}/${googleEnd}`,
    details: details.description,
    location: details.location,
    ctz: "Africa/Johannesburg",
  });

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?${params.toString()}`;

  window.open(googleCalendarUrl, "_blank", "noopener,noreferrer");
}

export function downloadAppleCalendar(booking) {
  const details = getCalendarDetails(booking);

  const dtStart = formatIcsDate(details.startDate);
  const dtEnd = formatIcsDate(details.endDate);

  const customerName = escapeIcsText(booking.customerName);

  const customerEmail = escapeIcsText(booking.customerEmail);

  const customerPhone = escapeIcsText(booking.customerPhone);

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//NOIR & BLADE//Barbershop//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:noir-blade-${booking.id || Date.now()}@noirandblade.co.za`,
    `DTSTAMP:${formatIcsDate(new Date())}`,
    `DTSTART:${dtStart}`,
    `DTEND:${dtEnd}`,
    `SUMMARY:${escapeIcsText(details.title)}`,
    `DESCRIPTION:${escapeIcsText(details.description)}`,
    `LOCATION:${escapeIcsText(details.location)}`,
    `ATTENDEE;CN=${customerName}:mailto:${customerEmail}`,
    `X-NOIR-CUSTOMER-PHONE:${customerPhone}`,
    "STATUS:CONFIRMED",
    "SEQUENCE:0",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([icsContent], {
    type: "text/calendar;charset=utf-8",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;
  link.download = "noir-blade-appointment.ics";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}
