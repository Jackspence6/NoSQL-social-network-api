// Imports
const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

// Initializing the express server
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Turning Routes on
app.use(routes);

// Listening for DB "open" and then starting Server
db.once("open", () => {
	app.listen(PORT, () => {
		console.log(`Social Network API server running on PORT ${PORT}!`);
	});
});
