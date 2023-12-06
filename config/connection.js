// Imports
const { connect, connection } = require("mongoose");

// If .env secret exists, using it - else using local connection
const connectionString =
	process.env.DB_URI || "mongodb://localhost:27017/socialNetworkDB";

// Connecting to MongoDB
connect(connectionString, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// Exports
module.exports = connection;
