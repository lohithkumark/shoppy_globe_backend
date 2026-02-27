const express = require("express");
const router = express.Router();

const { getAllProducts } = require("../controllers/product.controller");

// GET /products
router.get("/", getAllProducts);

module.exports = router;