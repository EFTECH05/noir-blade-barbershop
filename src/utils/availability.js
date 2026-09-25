import { supabase } from "../services/supabaseClient";

export async function isTimeAvailable(barberId, bookingDate, bookingTime) {
  const { data, error } = await supabase
    .from("bookings")
    .select("id")
    .eq("barber_id", barberId)
    .eq("booking_date", bookingDate)
    .eq("booking_time", bookingTime)
    .eq("status", "confirmed")
    .limit(1);

  if (error) {
    throw new Error(error.message);
  }

  return data.length === 0;
}
