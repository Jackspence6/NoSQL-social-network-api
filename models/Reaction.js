// Imports
const mongoose = require("mongoose");

// Function to format the date
function formatDate(date) {
	return new Intl.DateTimeFormat("en-US", {
		year: "numeric",
		month: "long",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
	}).format(new Date(date));
}

// Reaction Schema
const reactionSchema = new mongoose.Schema(
	{
		reactionId: {
			type: mongoose.Types.ObjectId,
			default: () => new mongoose.Types.ObjectId(),
		},
		reactionBody: {
			type: String,
			required: true,
			maxLength: 280,
		},
		username: {
			type: String,
			required: true,
		},
		createdAt: {
			type: Date,
			default: Date.now,
			get: (date) => formatDate(date),
		},
	},
	{
		toJSON: {
			getters: true,
		},
		id: false,
	}
);

// Exports
module.exports = reactionSchema;
