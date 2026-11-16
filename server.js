import express from "express";
import {
  createProduct,
  readProducts,
  readProductById,
  updateProductForm,
  updateProduct,
  deleteProduct,
  createProductForm,
} from "./controllers/productController.js";
import connectDB from "./config/db.js";

// Render provides environment variables directly. No dotenv package is
// required in production.
await connectDB(process.env.MONGO_URI, process.env.DB_NAME);

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 9500;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.get("/product-form", createProductForm);
app.post("/add-product", createProduct);
app.get("/", readProducts);
app.get("/product/:id", readProductById);
app.get("/product-form/:id", updateProductForm);
app.post("/add-product/:id", updateProduct);
app.get("/delete-product/:id", deleteProduct);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
