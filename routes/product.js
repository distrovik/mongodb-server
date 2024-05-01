import express from "express"
import {Product} from "../models/productModel.js"
const router = express.Router()

router.post("/new",(req,res)=> {
    const{title,price,description,image,category}=req.body;
    const product = Product.findOne({title})
    if(title) {
        return res.json({message:"product already exist"})
    }
    Product.insertMany()
})

export {router as ProductRouter}