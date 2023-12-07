// Imports
const Thought = require("../models/Thought");

// Exports
module.exports = {
	// GET to get all thoughts
	async getAllThoughts(req, res) {
		try {
			const thoughtData = await Thought.find({});

			// Checking if Thoughts exist
			if (!thoughtData) {
				res
					.status(400)
					.json({ message: "I can't seem to find any existing Thoughts!" });
				return;
			}
			res.status(200).json(thoughtData);
		} catch (err) {
			res.status(500).json(err);
		}
	},

	// GET to get a single thought by its _id
	async getSingleThought(req, res) {
		try {
			const thoughtData = await Thought.findById(req.params.id);

			// Checking if Thought exists
			if (!thoughtData) {
				res.status(400).json({
					message: "I can't seem to find the Thought you're looking for!",
				});
				return;
			}
			res.status(200).json(thoughtData);
		} catch (err) {
			res.status(500).json(err);
		}
	},
};
