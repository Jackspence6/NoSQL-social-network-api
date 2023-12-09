// Imports
const router = require("express").Router();
const userRoutes = require("./userRoutes");
const friendRoutes = require("./friendRoutes");
const thoughtRoutes = require("./thoughtRoutes");
const reactionRoutes = require("./reactionRoutes");

// Middleware
router.use("/users", userRoutes);
router.use("/users/:id/friends", friendRoutes);
router.use("/thoughts", thoughtRoutes);
router.use("/thoughts", reactionRoutes);

// Exports
module.exports = router;
