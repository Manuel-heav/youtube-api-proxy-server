const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

app.use(morgan('tiny'));
app.use(cors());
require('dotenv').config()

const app = express();

app.get('/videos', (req, res) => {
    res.json([])
});