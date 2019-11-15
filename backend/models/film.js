const mongoose = require('../database');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String,
        required: [true, 'Title required'],
        unique: true
    },
    year: {
        type: String,
        required: [true, 'Year required']
    },
    format: {
        type: String,
        required: [true, 'Format required']
    },
    stars: {
        type: String,
        required: [true, 'Stars required']
    }
})
module.exports = mongoose.model("Film" , schema);