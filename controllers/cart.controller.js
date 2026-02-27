const Cart = require("../models/cart.model");
const Product = require("../models/product.model");

// POST /cart
const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const cartItem = new Cart({
      user: req.user.userId,
      product: productId,
      quantity,
    });

    const savedItem = await cartItem.save();

    res.status(201).json(savedItem);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// PUT /cart/:id
const updateCart = async (req, res) => {
  try {
    const updatedItem = await Cart.findByIdAndUpdate(
      req.params.id,
      { quantity: req.body.quantity },
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: "Invalid Cart ID" });
  }
};

// DELETE /cart/:id
const removeFromCart = async (req, res) => {
  try {
    const deletedItem = await Cart.findByIdAndDelete(req.params.id);

    if (!deletedItem) {
      return res.status(404).json({ message: "Cart item not found" });
    }

    res.status(200).json({ message: "Item removed from cart" });
  } catch (error) {
    res.status(500).json({ message: "Invalid Cart ID" });
  }
};

// GET /cart
const getCartItems = async (req, res) => {
  try {
    const cartItems = await Cart.find({ user: req.user.userId })
      .populate("product");

    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  addToCart,
  updateCart,
  removeFromCart,
  getCartItems
};