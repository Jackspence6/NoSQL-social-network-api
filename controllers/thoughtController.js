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

	//  TODO: push the created thought's _id to the associated user's thoughts array field
	// POST to create a new thought
	async createThought(req, res) {
		try {
			const thoughtData = await Thought.create(req.body);
			res.status(200).json(thoughtData);
		} catch (err) {
			res.status(500).json(err);
		}
	},

	// PUT to update a thought by its _id
	async updateThought(req, res) {
		try {
			// findOneAndUpdate method params
			const filter = { _id: req.params.id };
			const update = { $set: req.body };
			// Enforcing validators & returning updated object to user
			const options = { runValidators: true, new: true };

			const thoughtData = await Thought.findOneAndUpdate(
				filter,
				update,
				options
			);

			// Checking if Thought exists
			if (!thoughtData) {
				res.status(400).json({
					message: "I can't seem to find the Thought you're trying to update!",
				});
				return;
			}
			res.status(200).json(thoughtData);
		} catch (err) {
			res.status(500).json(err);
		}
	},

	// DELETE to remove a thought by its _id
	async deleteThought(req, res) {
		try {
			// findOneAndDelete method params
			const filter = { _id: req.params.id };
			const options = { new: true };

			const thoughtData = await Thought.findOneAndDelete(filter, options);

			// Checking if Thought exists
			if (!thoughtData) {
				res.status(400).json({
					message: "I can't seem to find the Thought you're trying to delete!",
				});
				return;
			}
			res.status(200).json(thoughtData);
		} catch (err) {
			res.status(500).json(err);
		}
	},
};
