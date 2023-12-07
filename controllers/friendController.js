// Imports
const User = require("../models/User");

// Exports
module.exports = {
	// POST to add a new friend to a user's friend list
	async addFriend(req, res) {
		try {
			// findOneAndUpdate method params
			const filter = { id: req.params.id };
			const update = { $addToSet: { friends: req.body } };
			// Enforcing validators & returning updated object to user
			const options = { runValidators: true, new: true };

			const friendData = await User.findOneAndUpdate(filter, update, options);

			// Checking if the User exists
			if (!friendData) {
				res.status(400).json({
					message:
						"I can't seem to find the User you're trying to add a friend to!",
				});
				return;
			}
			res.status(200).json(friendData);
		} catch (err) {
			res.status(500).json(err);
		}
	},
};
