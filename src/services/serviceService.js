import { supabase } from "./supabaseClient";
import { createService } from "../models/serviceModel";

export async function getServices() {
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("active", true)
    .order("category", { ascending: true })
    .order("name", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data.map(createService);
}

export async function getServiceById(id) {
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("id", id)
    .eq("active", true)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return createService(data);
}
