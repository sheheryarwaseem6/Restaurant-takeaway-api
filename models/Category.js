const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const categorySchema = new mongoose.Schema({ 

    category_name:{
        type : String
    },
    category_image:{
        type: String
    },
    parentId:{
        type: String,
        default : 0
    }

},
{ timestamps: true })

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;