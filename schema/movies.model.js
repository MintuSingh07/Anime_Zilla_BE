const mongoose = require('mongoose');

const moviesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
      },
      genre: {
        type: [String],
        required: true
      },
      releaseYear: {
        type: Number,
        required: true
      },
      director: {
        type: String,
        required: true
      },
      featured: {
        type: Boolean,
        default: false
      }
});

const Movie = mongoose.model('Movie', moviesSchema);

module.exports = Movie;