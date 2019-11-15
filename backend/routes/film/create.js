const Film = require('../../models/film');

exports.post = (req, res) => {
    const {title , year , format , stars} = req.body;

    if(!title || !year || !format || !stars){
        return res.status(400).send("Invalid data");
    }

    Film.create({title , year , format , stars}, (err, film) => {
    	if(err) {
	    	if (err.code === 11000) {
				return res.status(400).json("Failed to add. Info about this film already exists.")
	    	}else{
	    		return res.status(500).json("Failed to add new film.")
	    	}
	    }
    	res.json(film);
    });
}