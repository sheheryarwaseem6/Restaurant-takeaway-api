const mongoose = require('mongoose')

const RestaurantSchema = new mongoose.Schema({

    location: {
        type: String,
        longitude: {
            type: String
        },
        latitude: {
            type: String
        }
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    number: {
        type: Number
    },
    email: {
        type: String
    },
    timing: [{
        monday:{
            type : String
        },
        tuesday:{
            type : String
        },
        wednesday:{
            type : String
        },
        thursday:{
            type : String
        },
        friday:{
            type : String
        },
        saturday:{
            type : String
        },
        sunday:{
            type : String
        }
    }] 
})

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

module.exports = Restaurant;
