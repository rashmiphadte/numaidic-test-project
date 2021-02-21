const express = require('express')
const cors = require('cors');
const app = express()
const fs = require("fs")
const port = process.env.PORT || 4000

router = require('./routes/')(app);
require("./db/database")

const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(express.json())
app.use(cors());
app.options('*', cors());
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})