// Imports
const router = require("express").Router();
const {
	createReaction,
	deleteReaction,
} = require("../../controllers/reactionController");

// API Routes
// /api/thoughts/:thoughtId/reactions
router.route("/").post(createReaction).delete(deleteReaction);

// Exports
module.exports = router;
