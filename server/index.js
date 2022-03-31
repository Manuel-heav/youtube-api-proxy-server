const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express();
app.use(morgan('tiny'));
app.use(cors());
require('dotenv').config()


app.get('/videos', (req, res) => {
    res.json([])
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