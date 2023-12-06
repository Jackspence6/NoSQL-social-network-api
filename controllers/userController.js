// Imports
const User = require("../models/User");

// Exports
module.exports = {
	// GET all users
	async getAllUsers(req, res) {
		try {
			const userData = await User.find({});
			// Checking if Users exist
			if (!userData) {
				res
					.status(400)
					.json({ message: "I can't seem to find any existing Users!" });
				return;
			}
			res.status(200).json(userData);
		} catch (err) {
			res.status(500).json(err);
		}
	},
};
