const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    year: { type: Number, required: true },
    pages: { type: Number, required: true },
    publisher: { type: String, required: true },
  },
  {
    timestamps: true,
    collection: 'Books'
  }
);

const Book = mongoose.model('Book', bookSchema, 'Books')
module.exports = Book;
