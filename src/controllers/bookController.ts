import { Request, Response } from "express";
import { addBook, getAllBooks, getBook } from "../services/bookService";

export const createBook = async (req: Request, res: Response) => {
  const { title, author, price } = req.body;
  if (!title || !author || !price) {
    return res.status(400).json({
      error:
        "The fields (title: text, author: text, price: number) are mandatory, please fill them all in.",
    });
  }
  try {
    await addBook(title, author, price);
    return res.status(201).json({ message: "Book successfully created!" });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Error adding the book, please try again." });
  }
};

export const allBooks = async (req: Request, res: Response) => {
  try {
    const books = await getAllBooks();
    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).json({
      error: "Error retrieving all books, please try again",
    });
  }
};

export const getBookById = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: "The book ID is required." });
  }
  try {
    const book = await getBook(id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    return res.status(200).json(book);
  } catch (error) {
    return res.status(500).json({
      error: "Error retrieving the book, please try again.",
    });
  }
};
