const { Schema, model} = require('mongoose')

const visitorModel = new Schema({
    visitorName:{ type: String, required: true, default: "" },
    homePlanet: {type: Schema.Types.ObjectId, ref:"planet" },
    visitedPlanets: [{ type: Schema.Types.ObjectId, ref:"planet" }]
})

module.exports = model('visitor', visitorModel)