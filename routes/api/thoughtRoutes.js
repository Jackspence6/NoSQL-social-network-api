// Imports
const router = require("express").Router();
const {
	getAllThoughts,
	getSingleThought,
	createThought,
	updateThought,
	deleteThought,
} = require("../../controllers/thoughtController");

// API Routes
// /api/thoughts
router.route("/").get(getAllThoughts).post(createThought);

// /api/thoughts/:id
router
	.route("/:id")
	.get(getSingleThought)
	.put(updateThought)
	.delete(deleteThought);

// Exports
module.exports = router;
