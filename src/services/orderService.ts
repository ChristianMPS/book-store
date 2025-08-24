import { supabase } from "../db/supabaseClient";

export const createOrder = async (
  idBook: string,
  quantity: number,
  totalPrice: number
) => {
  const { error } = await supabase.from("orders").insert([
    {
      id_book: idBook,
      quantity,
      total_price: totalPrice,
    },
  ]);

  if (error) {
    console.error("Supabase insert error:", error);
    throw error;
  }
};

export const getAllOrders = async () => {
  const { data, error } = await supabase.from("orders").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
