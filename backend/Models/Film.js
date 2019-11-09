const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Film = new Schema({
    title: String,
    year: String,
    format: String,
    stars: String
})

module.exports = mongoose.model('Film', Film);