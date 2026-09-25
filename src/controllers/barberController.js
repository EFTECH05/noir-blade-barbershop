import { getBarbers, getBarberById } from "../services/barberService";

export async function loadBarbers() {
  try {
    return await getBarbers();
  } catch (error) {
    console.error("Failed to load barbers:", error);
    throw error;
  }
}

export async function loadBarber(id) {
  try {
    return await getBarberById(id);
  } catch (error) {
    console.error("Failed to load barber:", error);
    throw error;
  }
}
