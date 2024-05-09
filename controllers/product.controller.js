const product = require("../models/Product.model.js");

const getProducts = async (req, res) => {
  try {
    const products = await product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await product.findById(id);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  // console.log(req.body);
  // res.send("Data Received");
  // res.send(req.body);
  try {
    const products = await product.create(req.body);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await product.findByIdAndUpdate(id, req.body);
    if (!products) {
      return res.status(404).json({ message: "Product not found" });
    }
    const updatedProduct = await product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await product.findByIdAndDelete(id);
    if (!products) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getProduct,
  updateProduct,
  createProduct,
  deleteProduct,
};
