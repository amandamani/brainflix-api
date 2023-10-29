const express = require('express');
const router = express.Router();

router
.get('/', (req,res) => {
    res.send("Get videos list");
})
.get('/:id', (req,res) => {
    const videoId = req.params.id;
    res.send(`Get video ${videoId}`);
});

module.exports = router;