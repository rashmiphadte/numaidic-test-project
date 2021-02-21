// const placeInteractionModel = require('../model/place-interaction-model').Vehicles
// placeInteraction = (req, res) => {
//     return placeInteractionModel
//         .findAll({
//             include: [{
//                 model: TodoItem,
//                 as: 'todoItems',
//             }],
//             order: [
//                 ['createdAt', 'DESC'],
//                 [{
//                     model: TodoItem,
//                     as: 'todoItems'
//                 }, 'createdAt', 'ASC'],
//             ],
//         })
//         .then((todos) => res.status(200).send(todos))
//         .catch((error) => res.status(400).send(error));
// }

// vehicleActivity = (req, res) => {
//     return placeInteractionModel.findAll(req, (error, result) => {
//         if (error) {
//             return res.status(400).send(error)
//         }
//         return res.status(200).send(result)
//     })
// }

// module.exports = {
//     placeInteraction,
//     vehicleActivity
// }

const models = require('../models/').Vechicle;
placeInteraction = (req, res) => {
    return models
        .findAll({
            where: {
                license: 'ADTEST1'
            }
        })
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            console.log(error)
            // res.status(400).send(error)
        });
}
module.exports = {
    placeInteraction
};