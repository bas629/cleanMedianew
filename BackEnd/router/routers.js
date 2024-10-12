const express = require("express");
const router = express.Router();
const { createAccount } = require("../controller/accountCreate");
const {Private_Post,Public_Post,Protected_Post}=require("../controller/post");
const{get_Post}=require("../controller/getAllPost");
const{Private_Friend, Protected_Friend}=require("../controller/friends");
const{find_by_id}=require("../controller/findByID")
const{userAccount}=require("../controller/userAccount");
router.post("/creatAccount", createAccount);
router.put("/PrivatePost", Private_Post);
router.put("/PublicPost", Public_Post);
router.put("/ProtectedPost", Protected_Post);
router.post("/PrivateFriend", Private_Friend);
router.put("/ProtectedFriend", Protected_Friend);
router.post("/findById",find_by_id);
router.get("/getAllPost",get_Post);
router.post("/userAccount",userAccount);
module.exports = router;