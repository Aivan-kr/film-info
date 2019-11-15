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
        Film.insertMany(list, {ordered: false}, (err, response) => {
            if(err){
                console.log(list);
                let dub = err.result.result.writeErrors.map(({err}) => err.op);
                return res.status(400).json(dub);
            }

            res.json(response);
        });
    })    
}