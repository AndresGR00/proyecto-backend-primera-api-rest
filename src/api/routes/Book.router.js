const express = require("express");
const router = express.Router();
const bookController = require("../controllers/Book.controller");

router.get("/books", bookController.getAllBooks);
router.get("/id-book/:id", bookController.getBookById);
router.post("/create-book", bookController.createNewBook);
router.put("/edit-book/:id", bookController.editABook);
router.delete("/delete-book/:id", bookController.deleteABook);

module.exports = router;
