const express = require("express");
const axios = require("axios");
const app = express();

app.get("/users", async (req, res) => {
  const users = await axios.get("http://users-service:5001/users");
  res.json(users.data);
});

app.get("/products", async (req, res) => {
  const products = await axios.get("http://products-service:5002/products");
  res.json(products.data);
});

app.listen(5000, () => console.log("API Gateway running on 5000"));
