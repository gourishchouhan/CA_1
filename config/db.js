const mongoose = require('mongoose');

const connectDB = async function() {
    try{
        await mongoose.connect(`${process.env.MONGO_URL}`)
        console.log("MongoDB is connected :>")
    }catch (error){
        console.error('Failed to connect :<')
    }
}
module.exports = connectDB;