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
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();
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
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});