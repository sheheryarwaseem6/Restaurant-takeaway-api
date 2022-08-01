const router = require('express').Router()
const { verifyToken , verifyAdmin } = require('../middleware/authenticate')
const {addCategory , getAllCategory ,getAllSubCategory} = require('../controller/category')
const {addProduct, getAllProducts , getProductDetails , favourite, favouriteProducts} = require('../controller/productController')
const { getContent } = require('../controller/commonController')
const {addCardDetails} = require('../controller/cardController')
const {register , login, socialLogin, verifyUser, resendCode, forgotPassword, updatePassword, changePassword, logout } = require('../controller/authController')
const {getProfile , updateProfile} = require('../controller/userController')
const {addRestaurant , getAllRestaurant} = require('../controller/restaurantController')
const { upload } = require('../middleware/multer')



/** Content */
router.get('/get-content/:type', getContent);

// restaurant
router.post('/addRestaurant', verifyAdmin , addRestaurant)


//category
router.post('/addCategory',verifyAdmin, upload.single('category_image'), addCategory);
router.get('/getAllCategory/:parentId', getAllCategory);
router.get('/getAllSubCategory/:parentId', getAllSubCategory);

//products
router.post('/addProduct',verifyAdmin, upload.single('product_image') , addProduct);
router.get('/getAllProducts',verifyToken, getAllProducts);
router.get('/getProductDetails',verifyToken, getProductDetails);


//favourites
router.post('/favourite',verifyToken, favourite);
router.get('/getFavourite',verifyToken, favouriteProducts);


//add card details

router.post('/addCard',verifyToken, addCardDetails);


//user
router.get('/user',verifyToken, getProfile);
router.put('/updateProfile', verifyToken, upload.single('profilePicture'), updateProfile)



router.post('/register', register)
router.post('/login', login)
router.post('/social-login', socialLogin)
router.post('/verify-user', verifyUser);
router.post('/resend-code', resendCode);
router.post('/forgot-password', forgotPassword);
router.post('/update-password', updatePassword);
router.put('/change-password',verifyToken, changePassword);
router.post('/logout', verifyToken , logout)



module.exports = router