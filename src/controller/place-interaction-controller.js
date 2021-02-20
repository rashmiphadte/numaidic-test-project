const placeInteractionModel = require('../model/place-interaction-model')
placeInteraction = (req, res) => {
    return placeInteractionModel.getPlaces(req, (error, result) => {
        if (error) {
            return res.status(400).send(error)
        }
        return res.status(200).send(result)
    })
}

vehicleActivity = (req, res) => {
    return placeInteractionModel.vehicleActivity(req, (error, result) => {
        if (error) {
            return res.status(400).send(error)
        }
        return res.status(200).send(result)
    })
}

module.exports = {
    placeInteraction,
    vehicleActivity
}