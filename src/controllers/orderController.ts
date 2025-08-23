import { Request, Response } from "express";
import { createOrder, getAllOrders } from "../services/orderService";

export const postOrder = async (req: Request, res: Response) => {
  const { idBook, quantity } = req.body;

  if (!idBook || !quantity) {
    return res.status(400).json({ error: "idBook y quantity son obligatorios" });
  }

  try {
    const order = await createOrder(idBook, quantity);
    return res.status(201).json(order);
  } catch (error) {
    return res.status(500).json({ error: "Error al crear la orden" });
  }
};

export const getOrders = async (_req: Request, res: Response) => {
  try {
    const orders = await getAllOrders();
    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json({ error: "Error al obtener las órdenes" });
  }
};