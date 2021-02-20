const express = require('express')
const router = express.Router()
const placeController = require('../controller/place-interaction-controller')

router.get('/', (req, res) => {
    return placeController.vehicleActivity(req, res)
})

module.exports = router;