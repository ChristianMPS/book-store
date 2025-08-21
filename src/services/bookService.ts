import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

// TO DO change to .env and create client.ts
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
);

export const addBookToDatabase = async (
  title: string,
  author: string,
  price: number
) => {
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
