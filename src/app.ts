import express from "express";
import bookRoutes from "./routes/bookRoute";
import orderRoutes from "./routes/orderRoute";

const app = express();

app.use(express.json());

app.use("/api", bookRoutes);
app.use("/api", orderRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server run http://localhost:${PORT}`);
});