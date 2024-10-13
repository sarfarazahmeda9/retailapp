import express from 'express';
import mongoose from 'mongoose';
import Product from '../models/product.model.js';
import { getProducts, addProducts } from '../controllers/product.controller.js';

const router = express.Router();

//app verbs : get, post, put, delete
router.get("/", getProducts); 
router.post("/", addProducts);



export default router;