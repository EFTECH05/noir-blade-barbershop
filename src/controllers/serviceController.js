import { getServices, getServiceById } from "../services/serviceService";

export async function loadServices() {
  try {
    return await getServices();
  } catch (error) {
    console.error("Failed to load services:", error);
    throw error;
  }
}

export async function loadService(id) {
  try {
    return await getServiceById(id);
  } catch (error) {
    console.error("Failed to load service:", error);
    throw error;
  }
}
