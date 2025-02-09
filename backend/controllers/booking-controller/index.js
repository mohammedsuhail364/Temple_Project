const Booking = require("../../models/Booking");
const Bookings = require("../../models/Booking");

const addnewBookings = async (req, res) => {
  try {
    const bookingsData = req.body;
    const newBooking = new Bookings(bookingsData);
    const savedBookings = await newBooking.save();
    if (savedBookings) {
      res.status(201).json({
        success: true,
        message: "Booking added successfully",
        data: savedBookings,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured! in bookings",
    });
  }
};
const checkBookings = async (req, res) => {
  try {
    
    const bookingTitles =await Booking.find();
    if (!bookingTitles){
      return res.status(201).json({
        success:true,
        message:"No bookings"
      })
    }
    const returnBookings=[];
    bookingTitles.map((item,index)=>{
      returnBookings.push(item.title)
    })

    return res.status(201).json({
      success:true,
      returnBookings
    })
     
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured! check bookings",
    });
  }
};

module.exports={
    addnewBookings,
    checkBookings
}