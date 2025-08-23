import { Router } from "express";
import { postOrder, getOrders } from "../controllers/orderController";

const router = Router();

router.post("/orders", postOrder);
router.get("/orders", getOrders);

export default router;