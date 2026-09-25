import { supabase } from "./supabaseClient";

export async function getAdminBookings(username, password) {
  const { data, error } = await supabase.rpc("get_admin_bookings", {
    admin_username: username,
    admin_password: password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
