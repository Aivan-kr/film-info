const Film = require('../../models/film');

exports.delete = (req, res) => {
    const {id} = req.params;

    if(!id){
        return res.status(500).send("Invalid data");
    }

    Film.deleteOne({_id : id}, err => {
    	if(err){
    		res.status(400).send("Failed delete");
    	}
    	res.status(200).send("Success");
    });
}