import "reflect-metadata";
import { createConnection } from "typeorm";
const express = require("express");
const db = require("./db");
const userController = require("./controllers/userController");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/users", userController);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
