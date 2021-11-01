
const {connect} = require('mongoose')

const dbconnection = async () => {
    const con = await connect('mongodb://127.0.0.1:27017/solarsDB', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log(`mongho db connected: ${con.connection.host}`);
}

module.exports = dbconnection