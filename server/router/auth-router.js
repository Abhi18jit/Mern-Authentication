const express=require("express");
const router=express.Router();
const authController=require("../controllers/auth-controllers")
const validate=require("../middlewares/validate-middleware");
const registerSchema=require("../validator/auth-validator");
const loginSchema=require("../validator/login-validator");
const authMiddleware=require("../middlewares/authMiddleware")


router.route("/").get(authController.home);
router.route("/register").post(validate(registerSchema), authController.register);
router.route("/login").post(validate(loginSchema),authController.login);
router.route("/user").get(authMiddleware,authController.user);

module.exports=router;