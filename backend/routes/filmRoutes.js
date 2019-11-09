const express = require('express');
const router = express();
const Film = require('../Models/Film');

router.get('/films', async (req, res) => {
    try{
        const films = await Film.find();
        res.json(films);
    }catch(e){
        console.log(e);
    }

})

router.get('/films/:id', async (req, res) => {
    try{
        const film = await Film.findById(req.params.id);
        res.json(film);
    }catch(e){
        console.log(e);
        res.status(404).send('data is not found');
    }
})

router.post('/films/add', async (req, res) => {
    try{
        await new Film(req.body).save();
        res.status(200).send('film added successfully');
    }catch(e){
        console.log(e);
        res.status(400).send('adding failed');
    }
})

router.post('/films/delete', async (req, res) => {
    try{
        await Film.deleteOne({ _id: req.body.id})
        res.status(200).send("deletion successful");
    }catch(e){
        console.log(e);
        res.status(400).send("deletion failed");
    }
})

module.exports = router;