// Imports
const router = require("express").Router();
const apiRoutes = require("./api");

// Middleware
router.use("/api", apiRoutes);

//  Catch-all error Route
router.use((req, res) =>
	res.status(404).send("404 Not Found! Please enter a valid Route path!")
);

// Exports
module.exports = router;
