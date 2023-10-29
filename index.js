require('dotenv').config();
const {PORT, BACKEND_URL, CORS_ORIGIN} = process.env;
const express = require('express');
const app = express();
const videoRoutes = require('./routes/videos');

app.use(cors({origin: CORS_ORIGIN}))

app.use('/videos', videoRoutes);

app.listen(PORT, () => {
    console.log(`Server running at ${BACKEND_URL} on port ${PORT}`);
})