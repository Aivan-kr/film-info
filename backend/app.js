const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');
const fs = require('fs');
const formData = require("express-form-data");
const path = require('path');
const logger = require("morgan");

fs.readdir(__dirname , (err , folders) => {
    if(err){
        return;
    }

   if(folders.indexOf("uploads") === -1){
       fs.mkdir(path.join(__dirname, '/uploads') , (err) => {
           if(!err){
               console.log("Folder uploads create")
           }
       })
   }
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(formData.parse({
    uploadDir: './uploads',
    autoClean: true
}));

app.use(formData.format());
app.use(logger('dev'));

app.use(express.static(path.join(__dirname, '../frontend/build')));
app.use(routes);

app.use('*', (req, res) => res.sendFile(path.join(__dirname, '../frontend/build/index.html')));

module.exports = app;