const express = require('express');
const router = express.Router();
const fs = require('fs');
router.use(express.json());
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
})
.post('/upload', (req,res) => {
    res.status(200).send("Post complete");
    const {id, title, description} = req.body;
    let video = {};
    let videoDetail = {}
    video.id = id;
    video.title = title;
    video.channel = "Aman Damani";
    video.image = "http://localhost:8080/images/Upload-video-preview.jpg";
    videoDetail = {...video};
    videoDetail.description = description;
    videoDetail.views = "786110786";
    videoDetail.likes = "786110786";
    videoDetail.duration = "5:00";
    videoDetail.timestamp = Date.now();
    videoDetail.comments = [];
    apiData.videos.push(video);
    apiData.videDetails.push(videoDetail);
    fs.writeFile('data/videos.json', JSON.stringify(apiData),(err) => {
        if (err) {
          console.log(err);
          return;
        } else {
          console.log('Videos file successfully updated.');
        }
      });
})

module.exports = router;