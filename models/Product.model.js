const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");


//  creating a product schema
const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter the Product name"],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  { Timestamp: true }
);
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
