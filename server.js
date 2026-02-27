const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const productRoutes = require("./routes/product.routes");
const authRoutes = require("./routes/auth.routes");
const cartRoutes = require("./routes/cart.routes");

const app = express();

connectDB();

app.use(express.json());

app.use("/products", productRoutes);

app.use("/auth", authRoutes);

app.use("/cart", cartRoutes);

app.get("/", (req, res) => {
  res.send("ShoppyGlobe Backend Running 🚀");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});