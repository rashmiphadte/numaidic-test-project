const express = require('express')
const app = express()
const fs = require("fs")
const port = process.env.PORT || 3000

router = require('./route/vehicle');
require("./db/database")

const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(express.json())

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})