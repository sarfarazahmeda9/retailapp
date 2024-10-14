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
        if(!product.name || !product.price || !product.imageUrl){
            return res.status(400).json({success: false, message: 'Product data is required'});
        }
        const newProduct = await product.save();
        res.status(201).json({success: true, data: newProduct});
    } catch (error) {
        console.error(`Error: ${error.message}`);
        res.status(500).json({success: false, message: "Server Error" });
    }
}
export const updateProduct = async (req, res) => {
        const { id } = req.params;
        const product = req.body;
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send({success: false, message: 'Invalid product id'});
        }
        if(!product.name || !product.price || !product.imageUrl) {
            return res.status(400).send({success: false, message: 'Product data is required'});
        }

        try {
            const updatedProduct = await product.findByIdAndUpdate(id, product, {new: true});
            res.status(200).json({success: true, data: updatedProduct});
        } catch (err) {
            console.error(`Error: ${err.message}`);
            res.status(500).json({success: false, message: "Server Error" });
        }

    // try {
    // const product = req.body;
    // const { id } = req.params;

        // const product = await Product.findById(id);
        // if (product) {
        //     product.name = name;
        //     product.price = price;
        //     product.imageUrl = imageUrl;
        //     const updatedProduct = await product.save();
        //     res.json(updatedProduct);
        // } else {
        //     res.status(404).json({ message: "Product not found" });
        // }
    // }
    // catch (error) {
    //     console.error(`Error: ${error.message}`);
    //     res.status(500).json({ message: "Server Error" });
    // }
}
export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send({success: false, message: 'Invalid product id'});
        }
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: 'Product deleted successfully'});
    } catch (err) {
        console.error(`Error: ${err.message}`);
        res.status(500).json({success: false, message: "Server Error" });
    }
}

