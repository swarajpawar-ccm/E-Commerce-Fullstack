import { Request, Response } from "express";
import Product from "../models/Product";

// @desc Get all products
export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products" });
  }
};

// Create product
export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, category, image, description } = req.body;

    const product = new Product({ name, price, category, image, description });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json.apply({ message: "Product creation failed" });
  }
};
