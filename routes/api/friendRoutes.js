// Imports
const router = require("express").Router();
const {
	addFriend,
	removeFriend,
} = require("../../controllers/friendController");

// API Routes
// /api/users/:userId/friends/:friendId
router.route("/:id").post(addFriend).delete(removeFriend);

// Exports
module.exports = router;
