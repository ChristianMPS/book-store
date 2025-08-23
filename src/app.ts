import express from "express";
import bookRoutes from "./routes/bookRoute";
import orderRoutes from "./routes/orderRoute";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import path from "path";

const app = express();

const bookSwaggerDocument = YAML.load(
  path.join(__dirname, "../docs/books-swagger.yaml")
);
const ordersSwaggerDocument = YAML.load(
  path.join(__dirname, "../docs/orders-swagger.yaml")
);

app.use(
  "/docs/book",
  swaggerUi.serveFiles(bookSwaggerDocument),
  (_req: any, res: { send: (arg0: string) => any }) =>
    res.send(swaggerUi.generateHTML(bookSwaggerDocument))
);

app.use(
  "/docs/order",
  swaggerUi.serveFiles(ordersSwaggerDocument),
  (req: any, res: { send: (arg0: string) => any }) =>
    res.send(swaggerUi.generateHTML(ordersSwaggerDocument))
);

app.use(express.json());

app.use("/api", bookRoutes);
app.use("/api", orderRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server run http://localhost:${PORT}`);
});
