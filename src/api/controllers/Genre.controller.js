const Genre = require("../models/Genre.model");

//All Genres
exports.getAllGenres = async (req, res, next) => {
  try {
    const allGenres = await Genre.find().populate('books'); //Populate para leer el libro (está en otra colección)
    res.status(200).json(allGenres);
  } catch (err) {
    return res.status(500).json(err);
  }
};

//GenreByID
exports.getGenreById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const genreById = await Genre.findById(id).populate('books'); //Populate para leer el libro (está en otra colección)
    if (genreById) {
      res.status(200).json(genreById);
    } else {
      res.status(404).json("No genre has been found with this id");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
};

//Create new genre
exports.createNewGenre = async (req, res, next) => {
  try {
    const newGenre = new Genre({
      title: req.body.title,
      books: req.body.books,
    });

    const newCreatedGenre = await newGenre.save();
    return res.status(201).json(newCreatedGenre);
  } catch (err) {
    next(err);
  }
};

//Edit genre by ID
exports.editAGenre = async (req, res, next) => {
  try {
    const { id } = req.params;
    const oldGenre = await Genre.findById(id);
    const editedGenre = new Genre(req.body);
    editedGenre._id = id;
    editedGenre.books = [...oldGenre.books, ...req.body.books];
    const updatedGenre = await Genre.findByIdAndUpdate(id, editedGenre, {
      new: true,
    });
    return res.status(200).json(updatedGenre);
  } catch (err) {
    return next(err);
  }
};

//Delete genre by ID
exports.deleteAGenre = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Genre.findByIdAndDelete(id);
    return res.status(200).json("Genre deleted");
  } catch (err) {
    next(err);
  }
};
