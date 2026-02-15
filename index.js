const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

const products = [
  { id: 1, name: "Keyboard", price: 99.99 },
  { id: 2, name: "Mouse", price: 49.99 },
  { id: 3, name: "Monitor", price: 799.0 },
];

app.get("/", (req, res) => {
  res.status(200).json({ status: "ok", service: "devops-node-api" });
});

app.get("/products", (req, res) => {
  res.status(200).json(products);
});

if (require.main === module) {
  app.listen(port, () => console.log(`Server running on port ${port}`));
}

module.exports = app;
