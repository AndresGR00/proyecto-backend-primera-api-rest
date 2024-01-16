require("dotenv").config({ path: "./src/utils/.env" });
const express = require("express");
const { connectDB } = require('./src/config/db');
const bookRouter = require('./src/api/routes/Book.router')

const app = express();
app.use(express.json()); //Para que app pueda analizar/recibir JSON
app.use(express.urlencoded({ extended: false }));

connectDB();

app.disable("x-powered-by");
const PORT = 3000;

app.use('/api/V1', bookRouter)

app.use("*", (req, res, next) => {
  res.status(404).send("<h1> 404 Not found</h1>");
});

app.listen(PORT, () => {
  console.log("Server started in http://localhost:3000/");
});
