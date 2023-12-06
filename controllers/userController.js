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

	// GET a single user by their _id and their populated thought and friend data
	async getSingleUser(req, res) {
		try {
			const userData = await User.findById(req.params.id)
				// Populating the thoughts field
				.populate("thoughts")
				// Populating the friends field
				.populate("friends");
			// Checking if the single User exists
			if (!userData) {
				res.status(400).json({
					message: "I can't seem to find the User you're looking for!",
				});
				return;
			}
			res.status(200).json(userData);
		} catch (err) {
			res.status(500).json(err);
		}
	},
};
