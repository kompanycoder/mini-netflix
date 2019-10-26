// require mongoose
const mongoose = require("mongoose");
// create movie schema
const movieSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        max: 150
    },
    year: {
        type: String,
        required: true,
        max: 150
    },
    rated: {
        type: String,
        required: true,
        max: 150
    },
    released: {
        type: String,
        required: true,
        max: 150
    },
    runtime: {
        type: String,
        required: true,
        max: 150
    },
    genre: {
        type: String,
        required: true,
        max: 150
    },
    writers: {
        type: String,
        required: true,
        max: 350
    },
    director: {
        type: String,
        required: true,
        max: 150
    },
    actors: {
        type: String,
        required: true,
        max: 150
    },
    plot: {
        type: String,
        required: true,
        max: 250
    },
    language: {
        type: String,
        required: true,
        max: 150
    },
    country: {
        type: String,
        required: true,
        max: 150
    },
    awards: {
        type: String,
        required: true,
        max: 150
    },
    poster: {
        type: String,
        required: true,
        max: 150
    },
    ratings: [
        {
            source: {
            type: String,
            required: true,
            max: 150
            },
            value: {
                type: String,
                required: true,
                max: 150
            }
        }
    ],
    metascore: {
        type: String,
        required: true,
        max: 150
    },
    imdbRating: {
        type: String,
        required: true,
        max: 150
    },
    imdbVotes: {
        type: String,
        required: true,
        max: 150
    },
    imdbID: {
        type: String,
        required: true,
        max: 150
    },
    type: {
        type: String,
        required: true,
        max: 150
    },
    dvd: {
        type: String,
        required: true,
        max: 150
    },
    boxOffice: {
        type: String,
        required: true,
        max: 150
    },
    production: {
        type: String,
        required: true,
        max: 150
    },
    website: {
        type: String,
        required: true,
        max: 150
    },
    response: {
        type: String,
        required: true,
        max: 150
    }
});

// declare model
const Movie = mongoose.Model("Movie", movieSchema);
// export movie object
module.exports = {
    Movie
};