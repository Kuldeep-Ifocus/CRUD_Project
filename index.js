const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.routes");
//  to use express (middleWares)
const app = express();
app.use(express.json());
//  if we need send data in url encoded format (middleWares)
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send("Hello world stay hydrated and be happy and done ");
});

//
app.use("/api/products", productRoute);

// connect mongoose
mongoose
  .connect(
    "mongodb+srv://kuldeeprathor4646:5ALSePNFkux59vOQ@crudapi.kzhx6zl.mongodb.net/?retryWrites=true&w=majority&appName=CrudAPi"
  )
  .then(() => {
    console.log("Database connected successfully !");
    app.listen(5000, () => {
      console.log("server is running on port 5000");
    });
  })
  .catch(() => {
    console.log("Connection Failed");
  });
