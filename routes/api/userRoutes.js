// Imports
const router = require("express").Router();
const {
	getAllUsers,
	getSingleUser,
	createUser,
	updateUser,
	deleteUser,
} = require("../../controllers/userController");

// API Routes
// /api/users
router.route("/").get(getAllUsers).post(createUser);

// /api/users/:id
router.route("/:id").get(getSingleUser).put(updateUser).delete(deleteUser);

// Exports
module.exports = router;
