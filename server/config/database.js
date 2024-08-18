const mongoose = require("mongoose");
const Card = require("../Models/Card");
const cardsInfo = require("../data");

require("dotenv").config();
exports.connectDb = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`DB CONNECTION SUCCESSFUL ${conn.connection.host}`)
    }
    catch(error){
        console.log(`Error in mongodb connection ${error}`);

    }
}
exports.initData = async()=>{
    await Card.deleteMany({});
    await Card.insertMany(cardsInfo);
    console.log("DATA INITIALIZE SUCCESSFULLY");
}