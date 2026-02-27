const Product = require("../models/product.model");

// GET /products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// POST /products
const createProduct = async (req, res) => {
  try {
    const { name, price, description, stock } = req.body;

    const newProduct = new Product({
      name,
      price,
      description,
      stock,
    });

    const savedProduct = await newProduct.save();

    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};



// GET /products/:id
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Invalid Product ID" });
  }
};

module.exports = {
  getAllProducts, createProduct , getProductById
};