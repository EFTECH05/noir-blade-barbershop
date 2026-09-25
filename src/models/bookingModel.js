export function createBooking(data) {
  return {
    id: data.id,
    serviceId: data.service_id,
    barberId: data.barber_id,
    bookingDate: data.booking_date,
    bookingTime: data.booking_time,
    customerName: data.customer_name,
    customerEmail: data.customer_email,
    customerPhone: data.customer_phone,
    status: data.status,
    createdAt: data.created_at,
  };
}
