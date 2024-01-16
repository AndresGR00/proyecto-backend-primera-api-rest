const express = require("express");
const router = express.Router();
const bookController = require("../controllers/Book.controller");

router.get("/books", bookController.getAllBooks);
router.get("/id/:id", bookController.getBookById);
router.post("/create", bookController.createNewBook);
router.put("/edit/:id", bookController.editABook);
router.delete("/delete/:id", bookController.deleteABook);

module.exports = router;
