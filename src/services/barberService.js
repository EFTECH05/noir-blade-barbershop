import { supabase } from "./supabaseClient";
import { createBarber } from "../models/barberModel";

export async function getBarbers() {
  const { data, error } = await supabase
    .from("barbers")
    .select("*")
    .eq("active", true)
    .order("name", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data.map(createBarber);
}

export async function getBarberById(id) {
  const { data, error } = await supabase
    .from("barbers")
    .select("*")
    .eq("id", id)
    .eq("active", true)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return createBarber(data);
}
