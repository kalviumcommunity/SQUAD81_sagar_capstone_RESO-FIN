const router = require("express").Router();
const { signup, login, adminSignup, adminLogin } = require("../controllers/authController"); // Adjust the path as needed

router.post("/signup", signup);
router.post("/login",login);
router.post("/admin-signup" , adminSignup);
router.post("/admin-login",adminLogin);


module.exports = router;