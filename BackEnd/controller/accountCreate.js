const account = require("../models/accountpost");


//business logic 

exports.createAccount = async (req, res) => {
    try{
        //fetch data from req body 
        const {name, email, password} = req.body;
     
        const savedPost = await  account.create({name:name, email:email, password:password});
        res.json({
            post:savedPost,
        });

    }
    catch(err) {
        return res.status(500).json({
            error: err,
             
        });

        console.log(err);
    }
};