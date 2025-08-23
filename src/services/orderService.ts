import { supabase } from "../db/supabaseClient";

export const createOrder = async (idBook: string, quantity: number) => {
  const { data, error } = await supabase.from("orders").insert([
    { idBook, quantity }
  ]);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const getAllOrders = async () => {
  const { data, error } = await supabase.from("orders").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
};