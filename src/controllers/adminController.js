import { getAdminBookings } from "../services/adminService";

export async function loginAdmin(username, password) {
  if (!username.trim() || !password.trim()) {
    throw new Error("Please enter your username and password.");
  }

  try {
    return await getAdminBookings(username.trim(), password);
  } catch (error) {
    console.error("Admin login failed:", error);

    throw new Error("Invalid username or password.");
  }
}
