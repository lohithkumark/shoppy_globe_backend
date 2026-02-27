const express = require("express");
const router = express.Router();

const protect = require("../middleware/auth.middleware");

const {
  addToCart,
  updateCart,
  removeFromCart,
  getCartItems
} = require("../controllers/cart.controller");

router.post("/", protect, addToCart);
router.put("/:id", protect, updateCart);
router.delete("/:id", protect, removeFromCart);
router.get("/", protect, getCartItems);

module.exports = router;