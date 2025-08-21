import { Router } from "express";
import {
  createBook,
  allBooks,
  getBookById,
} from "../controllers/bookController";

const router = Router();

router.post("/books", createBook);
router.get("/books", allBooks);
router.get("/books/:id", getBookById);

export default router;
