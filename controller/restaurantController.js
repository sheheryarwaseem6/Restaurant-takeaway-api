const Restaurant = require('../models/Restaurant');


const addRestaurant = async (req, res) =>{
    try{
        
        if(!req.body.location){
            return res.status(400).json({
                status: 0,
                message: 'location is required'
            })
        }
        // else if(!req.body.contact){
        //     return res.status(400).json({
        //         status: 0,
        //         message: 'contact is required'
        //     })
        // }
        // else if(!req.body.days){
        //     return res.status(400).json({
        //         status: 0,
        //         message: 'days is required'
        //     })
        // }
        else{
            const restaurant = new Restaurant({
                userId: req.user._id,
                location: req.body.location,
                number: req.body.number,
                email: req.body.email,
                timing: req.body.timing,
                // "timing.monday": req.body.monday,
                // "timing.tuesday": req.body.tuesday,
                // "timing.wednesday": req.body.wednesday,
                // "timing.thursday": req.body.thursday,
                // "timing.friday": req.body.friday,
                // "timing.saturday": req.body.saturday,
                // "timing.sunday": req.body.sunday,
                // "days.time": req.body.time,
                location: req.body.location
            });
            // restaurant.name = req.body.name,
            // restaurant.location = req.body.location,
            // restaurant.contact = req.body.contact,
            // restaurant.days = req.body.days,
            // restaurant.userId = req.user._id
            const addrestaurant = await restaurant.save();
            if(addrestaurant){
                return res.status(200).json({
                    status: 1,
                    message: 'Restaurant added successfully'
                })
            }
            else{
                return res.status(400).json({
                    status: 0,
                    message: 'Something went wrong.'
                });
            }
        }
        

    }catch(error){
        return res.status(400).json({
            status: 0,
            message: error.message
        })
    }
}

const getAllRestaurant = async (req, res) =>{
    try{
        const restaurant = await Restaurant.find();
        if(restaurant){
            return res.status(200).json({
                status: 1,
                message: restaurant
            })
        }
        else{
            return res.status(400).json({
                status: 0,
                message: 'Restaurant not found'
            })
        }


    }catch(error){
        return res.status(400).json({
            status: 0,
            message: error.message
        })
    }
}

//get a restaurant

const getRestaurant = async (req, res) => {
    try{
        const restaurant = await Restaurant.findById(req.body.id);
        if(restaurant){
            return res.status(200).json({
                status: 1,
                message: restaurant
            })
        }
        else{
            return res.status(400).json({
                status: 0,
                message: 'Restaurant not found'
            })
        }

    }catch(error){
        return res.status(400).json({
            status: 0,
            message: error.message
        })
    }
}

module.exports = {addRestaurant , getAllRestaurant}