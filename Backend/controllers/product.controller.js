import Product from "../models/product.model.js";
import mongoose from 'mongoose';

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        console.log(products);
        res.json(products);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).json({ message: "Server Error" });
    }
}

export const addProducts = async (req, res) => {
    try {
        const { name, price, imageUrl } = req.body;
        const product = new Product({
            name: name,
            price : price,
            imageUrl: imageUrl
        });
        console.log(product);
        const newProduct = await product.save();
        res.status(200).json(newProduct);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).json({ message: "Server Error" });
    }
}


