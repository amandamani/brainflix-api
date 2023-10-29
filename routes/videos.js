const express = require('express');
const router = express.Router();
const fs = require('fs');

const apiData = require('../data/videos.json');

router
.get('/', (req,res) => {
    res.status(200);
    res.json(apiData.videos);
})
.get('/:id', (req,res) => {
    const videoId = req.params.id;
    res.status(200)
    res.json(apiData.videDetails.filter((element) => element.id === videoId)[0]);
});

module.exports = router;