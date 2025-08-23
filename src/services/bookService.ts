import { supabase } from "../db/supabaseClient";

export const addBook = async (title: string, author: string, price: number) => {
  const { data, error } = await supabase.from("books").insert([
    {
      title,
      author,
      price,
    },
  ]);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const getAllBooks = async () => {
  const { data, error } = await supabase.from("books").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

export const getBook = async (id: string) => {
  const { data } = await supabase.from("books").select("*").eq("id", id);
  return data ?? null;
};
