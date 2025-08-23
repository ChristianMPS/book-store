import { supabase } from "../db/supabaseClient";

export const createOrder = async (
  idBook: string,
  quantity: number,
  totalPrice: number
) => {
  const { data, error } = await supabase
    .from("orders")
    .insert([{ idBook, quantity, totalPrice }]);

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
