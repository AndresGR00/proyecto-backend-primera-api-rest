/* require("dotenv").config({ path: "./src/utils/.env" });
const mongoose = require("mongoose");
const Book = require("../models/Book.model");

const books = [
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    year: 1967,
    pages: 432,
    publisher: "Sudamericana",
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    pages: 328,
    publisher: "Secker & Warburg",
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    year: 1954,
    pages: 1178,
    publisher: "Allen & Unwin",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    pages: 432,
    publisher: "T. Egerton, Whitehall",
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    year: 1997,
    pages: 223,
    publisher: "Bloomsbury",
  },
  {
    title: "Don Quijote",
    author: "Miguel de Cervantes",
    year: 1605,
    pages: 863,
    publisher: "Francisco de Robles",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    pages: 384,
    publisher: "J.B. Lippincott & Co.",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    pages: 180,
    publisher: "Charles Scribner's Sons",
  },
  {
    title: "Chronicle of a Death Foretold",
    author: "Gabriel García Márquez",
    year: 1981,
    pages: 120,
    publisher: "La Oveja Negra",
  },
];

const booksDocument = books.map((book) => new Book(book));

mongoose
  .connect(process.env.DB_URL)
  .then(async () => {
    const allBooks = await Book.find();
    if (allBooks.length) {
      await Book.collection.drop();
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    await Book.insertMany(booksDocument);
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect()); */
