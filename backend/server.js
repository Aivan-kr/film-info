const express = require('express');
const mongoose = require('mongoose');

const PORT = 9000;
const uri = "mongodb+srv://Aivan:admin@webbylab-6fyew.mongodb.net/test?retryWrites=true&w=majority";

const app = express();
const filmRoutes = require('./routes/filmRoutes');

app.use(express.json());
app.use(filmRoutes);

mongoose.connect(uri, { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})