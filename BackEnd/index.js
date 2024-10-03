const express = require('express');


const cors=require('cors'); 
const app = express(); 
app.use(cors());
const cloudinary = require('cloudinary');
const fileupload = require("express-fileupload");
app.use(fileupload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));
const userRoutes = require("./router/routers");
const dbConnect = require("./config/dbconnected")
const cloudinaryConnect=require("./config/cloudniary");
cloudinaryConnect.connectCloudinary();
app.use(express.json());
dbConnect();
app.use(userRoutes);
 
app.listen(2000,()=>{
console.log('server  Stated at port 4000');
})