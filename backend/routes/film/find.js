const Film = require('../../models/film');

exports.get = (req, res) => {
    Film.find({}, (err, list) => {
    	if (err) {
    		return res.status(400).send("Data fetch failed")
    	}
    	res.json(list)
    } )
}