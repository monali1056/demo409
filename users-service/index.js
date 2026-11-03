const express = require("express");
const app = express();

app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Monali" },
    { id: 2, name: "sonali" },
  ]);
});

app.listen(5001, () => console.log("Users Service running on 5001"));
