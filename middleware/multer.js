const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      if (file.fieldname == "category_image") {
        cb(null, "./uploads/category_image/");
      }
      if (file.fieldname == "product_image") {
        cb(null, "./uploads/product_image/");
      }
      if (file.fieldname == "profilePicture") {
        cb(null, "./uploads/profilePicture/");
      }
      // if (file.fieldname == "hf_images[]") {
      //   cb(null, "./uploads/feedback/");
      // }
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
    },
  });
  function fileFilter(req, file, cb) {
    cb(null, true);
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "application/pdf"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  }
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5,
    },
    fileFilter: fileFilter,
  });
  module.exports = {
    upload
}