import { Request, Response } from "express";
import { createOrder, getAllOrders } from "../services/orderService";
import axios from "axios";

const API_GET_BOOK = "http://localhost:3000/api/books";

type Book = {
  id: string;
  title: string;
  author: string;
  price: number;
};

export const postOrder = async (req: Request, res: Response) => {
  const { idBook, quantity } = req.body;

  if (!idBook || !quantity) {
    return res
      .status(400)
      .json({ error: "idBook y quantity son obligatorios" });
  }
  try {
    const getBooks = await axios.get<Book[]>(`${API_GET_BOOK}/${idBook}`);
    const books = getBooks.data;
    const book = books[0];
    await createOrder(idBook, quantity, quantity * book.price);
    return res.status(201).json({ message: "Orden creada con exito!" });
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return res
        .status(400)
        .json({ message: "El libro no existe, no se puede crear la orden" });
    }
    return res.status(500).json({ error: "Error al crear la orden" });
  }
};

export const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await getAllOrders();
    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json({ error: "Error al obtener las órdenes" });
  }
};
