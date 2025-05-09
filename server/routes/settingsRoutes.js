const router = require("express").Router();
const verifyToken = require("../middlewares/verifyToken")
const {changeUsername, changePassword } = require("../controllers/settingsController")
router.put('/change-username',verifyToken,changeUsername);
router.put("/change-password",verifyToken,changePassword);

module.exports = router ; 
