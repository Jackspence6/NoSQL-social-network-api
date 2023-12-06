// Imports
const mongoose = require("mongoose");
const reactionSchema = require("./Reaction");

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

// Thought Schema
const thoughtSchema = new mongoose.Schema(
	{
		thoughtText: {
			type: String,
			required: true,
			minLength: 1,
			maxLength: 280,
		},
		createdAt: {
			type: Date,
			default: Date.now,
			// Getter method to format the timestamp on query
			get: (date) => formatDate(date),
		},
		username: {
			type: String,
			required: true,
		},
		// Documents created with the reactionSchema
		reactions: [reactionSchema],
	},
	{
		toJSON: {
			virtuals: true,
			getters: true,
		},
		id: false,
	}
);

// Defining the reactionCount virtual
thoughtSchema.virtual("reactionCount").get(function () {
	return this.reactions.length;
});

// Thought Model
const Thought = mongoose.model("Thought", thoughtSchema);

// Exports
module.exports = Thought;
