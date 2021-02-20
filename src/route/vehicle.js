const express = require('express')
const router = express.Router()
const placeController = require('../controller/place-interaction-controller')

router.get('/place_interactions', (req, res) => {
    return placeController.placeInteraction(req, res)
})

module.exports = router;