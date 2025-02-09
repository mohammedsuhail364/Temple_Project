const mongoose = require("mongoose");

const BookingSchema=new mongoose.Schema({
    title:String,
    name:String,
    town:String,
    amount:Number,
    mobile:String
})

module.exports=mongoose.model('Bookings',BookingSchema);