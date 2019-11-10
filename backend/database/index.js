const mongoose = require('mongoose');

const db = process.env.DB ||  "mongodb://127.0.0.1:27017" ;
mongoose.connect(db, { 
    "useNewUrlParser" : true, 
    "keepAlive": 1, 
    "useUnifiedTopology": true 
});

module.exports = mongoose;