const Book = require("../models/Book.model");

//All Books
exports.getAllBooks = async (req, res, next) => {
  try {
    const allBooks = await Book.find();
    res.status(200).json(allBooks);
  } catch (err) {
    return res.status(500).json(err);
  }
};

//ElementByID
exports.getBookById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const bookById = await Book.findById(id);
    if (bookById) {
      res.status(200).json(bookById);
    } else {
      res.status(404).json("No book has been found with this id");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
};

//Create new element
exports.createNewBook = async (req, res, next) => {
  try {
    const newBook = new Book({
      title: req.body.title,
      author: req.body.author,
      year: req.body.year,
      pages: req.body.pages,
      publisher: req.body.publisher,
    });

    const newCreatedBook = await newBook.save();
    return res.status(201).json(newCreatedBook);
  } catch (err) {
    next(err);
  }
};

//Edit by ID
exports.editABook = async (req, res, next) => {
  try {
    const id = req.params.id;
    const editedBook = new Book(req.body);
    editedBook._id = id;
    const updatedBook = await Book.findByIdAndUpdate(id, editedBook, {
      new: true, //Para que nos devuelva el libro actualizado (por defecto actualiza pero nos lo devuelve igual)
    });
    return res.status(200).json(updatedBook);
  } catch (err) {
    return next(err);
  }
};
//Falta añadir que muestre la actualización directamente (Clase online Santi)

//Delete by ID
exports.deleteABook = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Book.findByIdAndDelete(id);
    return res.status(200).json("Book deleted");
  } catch (err) {
    next(err);
  }
};
