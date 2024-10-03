const express = require("express");
const router = express.Router();
const { createAccount } = require("../controller/accountCreate");
const {Private_Post,Public_Post,Protected_Post}=require("../controller/post");
const{get_Post}=require("../controller/getAllPost");
const{Private_Friend, Protected_Friend}=require("../controller/friends");

router.post("/creatAccount", createAccount);
router.put("/PrivatePost", Private_Post);
router.put("/PublicPost", Public_Post);
router.put("/ProtectedPost", Protected_Post);
router.put("/PrivateFriend", Private_Friend);
router.put("/ProtectedFriend", Protected_Friend);
router.get("/getAllPost",get_Post);

module.exports = router;