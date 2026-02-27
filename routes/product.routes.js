const express = require("express");
const router = express.Router();

const { getAllProducts , createProduct , getProductById , updateProduct} = require("../controllers/product.controller");

// GET /products
router.get("/", getAllProducts);
router.post("/", createProduct);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);

module.exports = router;