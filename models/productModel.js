import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  sku: { type: String, required: true }
});

const ProductModel = mongoose.model("product", ProductSchema);

export { ProductModel as Product };