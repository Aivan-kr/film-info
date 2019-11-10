const Film = require('../../models/film');
const parseFile = require('../../lib/parseFile');

exports.post = (req, res) => {
    const {file} = req.files;

    if(!file){
        return res.status(500).send("Invalid data");
    }

    const {path} = file;

    parseFile(path, (err, list) => {
        if(err){
            return res.status(400).send("Failed to parse file");
        }

        Film.insertMany(list, (err, list) => {
            if(err){
                return res.status(400).send("Failed to update DB");
            }

            res.json(list);
        });
    })    
}