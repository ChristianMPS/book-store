import { Request, Response } from "express";
import { addBookToDatabase } from "../services/bookService";

export const createBook = async (req: Request, res: Response) => {
  const { title, author, price } = req.body;
  if (!title || !author || !price) {
    return res.status(400).json({
      error: "Los campos son obligatorios, por favor llenarlos todos.",
    });
  }
  try {
    const book = await addBookToDatabase(title, author, price);
    return res.status(201).json(book);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error al agregar el libro, por favor trate de nuevo" });
  }
};
