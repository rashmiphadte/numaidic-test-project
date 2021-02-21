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
const turf = require('@turf/turf')
const Sequelize = require('sequelize')
const punePolygon = [
    [
        [73.5598715332623, 18.7128121962049],
        [73.7795980957623, 18.858427375322],
        [74.0817221191998, 18.8298343351168],
        [74.1805990723248, 18.6633784989781],
        [74.2575033691998,
            18.4420517762916
        ],
        [74.2025717285748, 18.2569599275397],
        [74.0460165527935,
            18.1030009147098
        ],
        [73.743892529356, 18.0272764656119],
        [73.568111279356,
            18.074281691122
        ],
        [73.4774740723248, 18.2100037896017],
        [73.3538778809185,
            18.4733152757346
        ],
        [73.4088095215435, 18.6659806320587],
        [73.5598715332623,
            18.7128121962049
        ]
    ]
]
placeInteraction = (req, res) => {
    console.log(req.query.startDate)
    let points = []
    return models
        .findAll({

            attributes: ['license', 'latitude', 'longitude', 'time', 'model', 'engine', 'chasis'],
            where: {
                license: 'ADTEST1'
                // use timestamp condition
                // time: {
                //     // $between: [new Date(req.query.startDate), new Date(req.query.endDate)],
                //     $lte: req.query.startDate,
                //     $gte: req.query.endDate,
                // }
            }
        })
        .then((result) => {
            // once you get points with matching timestamp, get only those points falling between pune polygon
            let polygon = turf.polygon(punePolygon)
            let vehiclesWithinPolygon = []
            result.filter(element => {
                if (element.latitude && element.longitude) {
                    var point = {
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": [parseFloat(element.longitude), parseFloat(element.latitude)]
                        }
                    };
                    var ptsWithin = turf.inside(point, polygon);
                    if (ptsWithin) {
                        // to find a unique vehicle data , check for its index
                        // if index is -1 ie element is not present then push it
                        let index = vehiclesWithinPolygon
                            .map(function (ele) {
                                return ele.license;
                            })
                            .indexOf(element.license);
                        if (index === -1) {
                            vehiclesWithinPolygon.push(element)
                        }
                    }

                }
            })
            res.status(200).send(vehiclesWithinPolygon)
        })
        .catch((error) => {
            console.log(error)
            res.status(400).send(error)
        });
}
module.exports = {
    placeInteraction
};