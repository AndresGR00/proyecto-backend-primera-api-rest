const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const genreSchema = new Schema(
  {
    title: { type: String, required: true },
    books: [{ type: mongoose.Types.ObjectId, ref: 'Book' }],
  },
  {
    timestamps: true,
    collection: 'Genres'
  }
);

const Genre = mongoose.model('Genre', genreSchema, 'Genres')
module.exports = Genre;