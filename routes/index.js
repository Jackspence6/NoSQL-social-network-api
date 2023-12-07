// Imports
const router = require("express").Router();
const apiRoutes = require("./api");

// Middleware
router.use("/api", apiRoutes);

// Exports
module.exports = router;
