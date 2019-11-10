const Film = require('../../models/film');

exports.post = (req, res) => {
    const {title , year , format , stars} = req.body;

    if(!title || !year || !format || !stars){
        return res.status(500).send("Invalid data");
    }

    Film.create({title , year , format , stars}, (err, film) => {
    	if (err) {
			return res.status(400).send("Failed to add new film")
    	}
    	res.json(film);
    });
}