import { createNewBooking } from "../services/bookingService";
import { isTimeAvailable } from "../utils/availability";

export async function submitBooking(bookingData) {
  const available = await isTimeAvailable(
    bookingData.barberId,
    bookingData.bookingDate,
    bookingData.bookingTime,
  );

  if (!available) {
    throw new Error(
      "This time slot is already booked. Please choose another time.",
    );
  }

  try {
    return await createNewBooking(bookingData);
  } catch (error) {
    console.error("Failed to create booking:", error);
    throw error;
  }
}
