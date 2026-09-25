import { supabase } from "./supabaseClient";

export async function createNewBooking(bookingData) {
  const { error } = await supabase.from("bookings").insert({
    service_id: bookingData.serviceId,
    barber_id: bookingData.barberId,
    booking_date: bookingData.bookingDate,
    booking_time: bookingData.bookingTime,
    customer_name: bookingData.customerName,
    customer_email: bookingData.customerEmail,
    customer_phone: bookingData.customerPhone,
    status: "confirmed",
  });

  if (error) {
    throw new Error(error.message);
  }

  return {
    ...bookingData,
    status: "confirmed",
  };
}
