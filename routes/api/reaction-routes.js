const router = require("express").Router();
const {
  createReaction,
  deleteReaction,
} = require("../../controllers/reaction-controller");

// POST, and DELETE at /api/thoughts/:id
router.route("/:id").post(createReaction);
router.route("/:id").delete(deleteReaction);

module.exports = router;
