import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
// import {ProductRouter} from "./routes/product.js"
import { Product } from "./models/productModel.js";
dotenv.config();
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use("/new", ProductRouter)

mongoose
  .connect(`${process.env.URI}`)
  .then(() => {
    console.log("mongoDB connected");
  })
  .catch(() => {
    console.log("failed");
  });

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/dis", (req, res) => res.redirect("https://distrovik.com"));

app.get("/products", (req, res) => {
  Product.find({}).then(function (products) {
    res.send(products);
  });
});

app.post("/new", async (req, res) => {
  const data = new Product({
    title: req.body.data.title,
    price: req.body.data.price,
    description: req.body.data.description,
    category: req.body.data.category,
    image: req.body.data.image,
    sku: req.body.data.sku,
  });
  const value = await data.save();
  res.json("product added");
});

// app.post("/delete", async (req, res) => {
//   const { productId } = req.body;
//   Product.deleteOne({ _id: `ObjectId("${productId}")` });
//   res.json("Product Deleted");
// });
