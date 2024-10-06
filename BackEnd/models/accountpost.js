const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type:String,
		required: true,
	},
    password: {
		type:String,
		required: true,
	},
    private_Post: [{
		title:{
			type:String,
		required: true,
		}, 
	        descp:{
			type:String,
		required: true,
		}, 

	post_url:{
			type:String,
		required: true,
		} 

	}],
	public_Post:[{
		title:{
			type:String,
		required: true,
		}, 
	        descp:{
			type:String,
		required: true,
		}, 

	post_url:{
			type:String,
		required: true,
		} 

	}],
	protected_Post: [{
		title:{
			type:String,
		required: true,
		}, 
	        descp:{
			type:String,
		required: true,
		}, 

	post_url:{
			type:String,
		required: true,
		} 

	}],
	private_friends:[
		String
	],
	protected_friends:[
		String]

	



})

module.exports = mongoose.model("Account", userSchema);