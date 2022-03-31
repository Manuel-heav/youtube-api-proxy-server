const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const fetch = require('node-fetch')
require('dotenv').config()

const app = express();
app.use(morgan('tiny'));
app.use(cors());


app.get('/videos', (req, res) => {
    const url = `https://www.googleapis.com/youtube/v3/search?key=${process.env.GOOGLE_API_KEY}&channelId=UClnFESYauq1pNqBVBbcxsXQ&part=snippet,id&order=date&maxResults=20`
    fetch(url)
    .then(res=> res.json())
    .then(json => {
        res.json(json)
    })
});


const notFound = (req, res, next) =>  {
    res.status(404)
    const error = new Error('Not Found')
    next(error)
}

const errorHandler= (error, req, res, next) => {
    res.status(res.statusCode || 500)
    res.json({
        message: error.message
    })
}

app.use(notFound)
app.use(errorHandler)


const port = process.env.PORT || 5000


app.listen(port, () => {
    console.log(`Listening On port ${port}`)
})