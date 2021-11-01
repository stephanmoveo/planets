const { Schema, model} = require('mongoose')

const planetModel = new Schema({
    planetName: { type: String, required: true, default: "" },
    system:{type: Schema.Types.ObjectId, ref: 'solar'},
    visitors: [{ type: Schema.Types.ObjectId , ref: 'visitor'}]
})

module.exports = model('planet', planetModel)