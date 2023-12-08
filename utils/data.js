// Imports
const mongoose = require("mongoose");

// Seed Data for Users
const users = [
	{
		username: "User1",
		email: "user1@example.com",
		thoughts: [new mongoose.Types.ObjectId(), new mongoose.Types.ObjectId()],
		friends: [new mongoose.Types.ObjectId()],
	},
	{
		username: "User2",
		email: "user2@example.com",
		thoughts: [new mongoose.Types.ObjectId(), new mongoose.Types.ObjectId()],
		friends: [new mongoose.Types.ObjectId()],
	},
];

// Seed Data for Thoughts
const thoughts = [
	{
		_id: users[0].thoughts[0],
		thoughtText: "Thinking about the meaning of life.",
		createdAt: new Date(),
		username: users[0].username,
		reactions: [
			{
				_id: new mongoose.Types.ObjectId(),
				reactionBody: "Very deep thought!",
				createdAt: new Date(),
				username: users[1].username,
			},
			{
				_id: new mongoose.Types.ObjectId(),
				reactionBody: "Really makes you think!",
				createdAt: new Date(),
				username: users[1].username,
			},
		],
	},
	{
		_id: users[0].thoughts[1],
		thoughtText: "Pondering the mysteries of the universe.",
		createdAt: new Date(),
		username: users[0].username,
		reactions: [
			{
				_id: new mongoose.Types.ObjectId(),
				reactionBody: "So true!",
				createdAt: new Date(),
				username: users[1].username,
			},
		],
	},
	{
		_id: users[1].thoughts[0],
		thoughtText: "Wondering about the future of technology.",
		createdAt: new Date(),
		username: users[1].username,
		reactions: [
			{
				_id: new mongoose.Types.ObjectId(),
				reactionBody: "That's an interesting thought.",
				createdAt: new Date(),
				username: users[0].username,
			},
		],
	},
];

// Linking friends
users[0].friends[0] = users[1]._id;
users[1].friends[0] = users[0]._id;

// Exports
module.exports = { users, thoughts };
