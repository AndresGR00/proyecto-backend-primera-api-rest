const express = require("express");
const router = express.Router();
const genreController = require("../controllers/Genre.controller");

router.get("/genres", genreController.getAllGenres);
router.get("/id-genre/:id", genreController.getGenreById);
router.post("/create-genre", genreController.createNewGenre);
router.put("/edit-genre/:id", genreController.editAGenre);
router.delete("/delete-genre/:id", genreController.deleteAGenre);

module.exports = router;
