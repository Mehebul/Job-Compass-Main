const mongoose = require("mongoose");

const URI = 'mongodb+srv://123saptarsi:2hOIQ449MChQTrdN@job-compass-db.qd60zsg.mongodb.net/JOBCOMPASS?retryWrites=true&w=majority&appName=job-compass-db'

const connectDB = async ()=>{
    try {
        await mongoose.connect(URI);
        console.log(`database connected successfully`);
    } catch (error) {
        console.log(error);
        process.exit(0);
    }
}

module.exports = connectDB;