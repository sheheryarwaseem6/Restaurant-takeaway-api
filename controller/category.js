
const Category = require('../models/Category');

const addCategory = async (req, res) => {
    try {
        if (!req.body.category_name) {
            return res.status(400).json({
                status: 0,
                message: 'name is required'
            })
        }
        // else if (!req.body.category_image) {
        //     return res.status(400).json({
        //         status: 0,
        //         message: 'image is required'
        //     })
        // }
        else {

            if (req.file) {
                category_image = req.file.path
            }
            const category = new Category();
            category.category_name = req.body.category_name,
                category.category_image = (req.file ? req.file.path : req.body.category_image);
            if (req.body.parentId) {
                category.parentId = req.body.parentId
            }
            const addcategory = await category.save();

            if (addcategory) {
                return res.status(200).json({
                    status: 1,
                    message: 'Category added successfully'
                })
            } else {
                return res.status(400).json({
                    status: 0,
                    message: 'Something went wrong.'
                });
            }
        }

    } catch (err) {
        return res.status(400).json({
            status: 0,
            message: err.message
        })
    }
}

const getAllCategory = async (req, res) => {
    try {
        const category = await Category.find({parentId: 0});
        if (category) {
            return res.status(200).json({
                status: 1,
                message: category
            })
        } else {
            return res.status(400).json({
                status: 0,
                message: 'Category not found'
            })
        }

    } catch (error) {
        return res.status(400).json({
            status: 0,
            message: error.message
        })
    }
}
const getAllSubCategory = async (req, res) => {
    try {
        const category = await Category.find({parentId: req.params.parentId});
        if (category) {
            return res.status(200).json({
                status: 1,
                message: category
            })
        } else {
            return res.status(400).json({
                status: 0,
                message: 'Category not found'
            })
        }

    } catch (error) {
        return res.status(400).json({
            status: 0,
            message: error.message
        })
    }
}

module.exports = {
    addCategory,
    getAllCategory,
    getAllSubCategory
}