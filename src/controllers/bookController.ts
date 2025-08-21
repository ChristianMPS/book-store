import { Request, Response } from "express";
import { addBook, getAllBooks, getBook } from "../services/bookService";

export const createBook = async (req: Request, res: Response) => {
  const { title, author, price } = req.body;
  if (!title || !author || !price) {
    return res.status(400).json({
      error: "Los campos son obligatorios, por favor llenarlos todos.",
    });
  }
  try {
    const book = await addBook(title, author, price);
    return res.status(201).json(book);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error al agregar el libro, por favor trate de nuevo" });
  }
};

export const allBooks = async (req: Request, res: Response) => {
  try {
    const books = await getAllBooks();
    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).json({
      error: "Error al traer todos los libros, por favor trate de nuevo",
    });
  }
};

export const getBookById = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: "El ID del libro es requerido" });
  }
  try {
    const book = await getBook(id);
    if (!book) {
      return res.status(404).json({ error: "Libro no encontrado" });
    }
    return res.status(200).json(book);
  } catch (error) {
    return res.status(500).json({
      error: "Error al traer el libro, por favor trate de nuevo",
    });
  }
};
