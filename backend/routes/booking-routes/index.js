const express=require('express');
const { addnewBookings, checkBookings } = require('../../controllers/booking-controller');

const router=express.Router()

router.post('/add',addnewBookings);
router.get('/check',checkBookings);

module.exports=router;