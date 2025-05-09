const router = require("express").Router();
const {createProduct} = require("../controllers/productController")
const verifyToken = require("../middlewares/verifyToken");
const upload = require("../middlewares/multer")

router.post("/create-product", verifyToken,upload.array("images",4), createProduct);




module.exports = router;