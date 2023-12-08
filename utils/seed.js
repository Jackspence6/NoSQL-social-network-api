// Imports
const { connect, connection } = require("mongoose");
const { users, thoughts, reactions } = require("./data");
const User = require("../models/User");
const Thought = require("../models/Thought");

// If .env secret exists, using it - else using local connection
const connectionString =
	process.env.DB_URI || "mongodb://localhost:27017/socialNetworkDB";

// Mongoose Connection
connect(connectionString);

const seedDB = async () => {
	await User.deleteMany({});
	await Thought.deleteMany({});

	// Inserting users & thoughts
	await User.insertMany(users);
	await Thought.insertMany(thoughts);

	console.log("Database seeded!");
};

seedDB().then(() => {
	connection.close();
});
