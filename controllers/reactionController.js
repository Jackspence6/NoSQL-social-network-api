// Imports
const Thought = require("../models/Thought");

// Exports
module.exports = {
	// POST to create a reaction stored in a single thought's reactions array field
	async createReaction(req, res) {
		try {
			// findOneAndUpdate method params
			const filter = { id: req.params.id };
			const update = { $addToSet: { reactions: req.body } };
			// Enforcing validators & returning updated object to user
			const options = { runValidators: true, new: true };

			const reactionData = await Thought.findOneAndUpdate(
				filter,
				update,
				options
			);

			// Checking if Thought exists
			if (!reactionData) {
				res.status(400).json({
					message:
						"I can't seem to find the Thought you're trying to add a Reaction to!",
				});
				return;
			}
			res.status(200).json(reactionData);
		} catch (err) {
			res.status(500).json(err);
		}
	},
};
