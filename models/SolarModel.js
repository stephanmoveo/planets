const { Schema, model} = require('mongoose')

const solarsModel = new Schema({
    planets: [ { type: Schema.Types.ObjectId ,ref:'planet'} ],
    starName: { type: String, required: true, default: "" }
})

module.exports = model('solar', solarsModel)