const express = require("express");
const app = express();

app.get("/products", (req, res) => {
  res.json([
    { id: 1, product: "Laptop" },
    { id: 2, product: "Mobile" },
  ]);
});

app.listen(5002, () => console.log("Products Service running on 5002"));
