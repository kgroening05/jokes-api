const mongoose = require('mongoose')

require('dotenv').config()

// dbSecrets
const username = process.env.DBUSERNAME;
const password = process.env.DBPASSWORD;
const database = process.env.DATABASE;
const cluster = process.env.CLUSTER;

// connection string
const mongoDb = `mongodb+srv://${username}:${password}@${cluster}.fsq1lj2.mongodb.net/${database}?` 
                + `retryWrites=true&`
                + `w=majority`;

                
module.exports.connectDb = async function (){
    await mongoose.connect(mongoDb)
}
