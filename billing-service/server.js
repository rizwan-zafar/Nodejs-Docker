// imports
const express = require("express");
const morgan = require("morgan");

// init express app
const app = express();

// use morgan middleware
app.use(morgan("combined"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World from Billing Service");
});

// ! INVENTORY CRUD OPERATIONS
app.get("/billing", (req, res) => {
  res.send("GET INVENTORY");
});

app.post("/billing", (req, res) => {
res.send(res.body)
});

app.put("/billing", (req, res) => {
  res.send("PUT INVENTORY");
});

app.delete("/billing", (req, res) => {
  res.send("DELETE INVENTORY");
});

const PORT = 5008; // Update the port to 5002

app.listen(PORT, () => {
  console.log(`Billing service running on port ${PORT}`);
});