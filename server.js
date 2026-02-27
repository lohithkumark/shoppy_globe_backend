const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const productRoutes = require("./routes/product.routes");

const app = express();

connectDB();

app.use(express.json());

app.use("/products", productRoutes);

app.get("/", (req, res) => {
  res.send("ShoppyGlobe Backend Running 🚀");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});