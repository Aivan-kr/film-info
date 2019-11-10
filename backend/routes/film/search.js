const Film = require('../../models/film');

exports.get = (req, res) => {
    const {path} = req.params;

    if(!path){
        return res.status(500).send("Invalid data");
    }

    Film.find().lean().exec((err, list) => {
        if(err){
            return res.status(400).send("Search failed");            
        }
        
        let response = list.filter(item => {
            const title = item.title.toLowerCase();
            const stars = item.stars.toLowerCase();
            return title.includes(path.toLowerCase()) || stars.includes(path.toLowerCase());
        })

        return res.json(response)
    });
}