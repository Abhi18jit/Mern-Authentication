const express=require("express");
const router=express.Router();
const adminController=require("../controllers/admin-controller")
const authMiddleware=require("../middlewares/authMiddleware");
const adminMiddleware = require("../middlewares/admin-middleware");


router.route("/user").get(authMiddleware,adminMiddleware,adminController.getUserData);

router.route("/user/:id").get(authMiddleware,adminMiddleware,adminController.getSingleUserData);

router.route("/user/:id").patch(authMiddleware,adminMiddleware,adminController.updateSingleUser);

router.route("/user/:id").delete(authMiddleware,adminMiddleware,adminController.deleteUserData);

router.route("/contact").get(authMiddleware,adminMiddleware,adminController.getContactData);

router.route("/contact/:id").delete(authMiddleware,adminMiddleware,adminController.deleteContactData);

module.exports=router;