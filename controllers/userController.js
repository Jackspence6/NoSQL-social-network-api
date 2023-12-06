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

	// GET a single user by their _id and their populated thoughts and friends data
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

	// POST(create) a new user
	async createUser(req, res) {
		try {
			const userData = await User.create(req.body);
			response.status(200).json(userData);
		} catch (err) {
			res.status(500).json(err);
		}
	},

	// PUT to update a user by their _id
	async updateUser(req, res) {
		try {
			// findOneAndUpdate method params
			const filter = { id: req.params.id };
			const update = { $set: req.body };
			// Enforcing validators & returning updated object to user
			const options = { runValidators: true, new: true };

			const userData = await User.findOneAndUpdate(filter, update, options);

			// Checking if the User exists
			if (!userData) {
				res.status(400).json({
					message: "I can't seem to find the User you're trying to update!",
				});
				return;
			}
			res.status(200).json(userData);
		} catch (err) {
			res.status(500).json(err);
		}
	},

	//  TODO: Delete any associated friends & thoughts
	// DELETE to remove user by their _id
	async deleteUser(req, res) {
		try {
			// findOneAndDelete method params
			const filter = { id: req.params.id };
			const options = { new: true };

			const userData = await User.findOneAndDelete(filter, options);

			// Checking if the User exists
			if (!userData) {
				res.status(400).json({
					message: "I can't seem to find the User you're trying to delete!",
				});
				return;
			}
			res.status(200).json(userData);
		} catch (err) {
			res.status(500).json(err);
		}
	},
};
