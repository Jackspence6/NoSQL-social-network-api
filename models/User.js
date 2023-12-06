// Imports
const mongoose = require("mongoose");

// User Schema
const userSchema = new mongoose.Schema({
	username: {
		type: String,
		unique: true,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		// Email validation
		match: [/.+\@.+\..+/, "Please enter a valid email address!"],
	},
	thoughts: [
		{
			type: mongoose.Schema.Types.ObjectId,
			// Referencing the Thought model
			ref: "Thought",
		},
	],
	friends: [
		{
			type: mongoose.Schema.Types.ObjectId,
			// Self-referencing the User model
			ref: "User",
		},
	],
});

// Defining the friendCount virtual
userSchema.virtual("friendCount").get(function () {
	return this.friends.length;
});

// User Model
const User = mongoose.model("User", userSchema);

// Exports
module.exports = User;
