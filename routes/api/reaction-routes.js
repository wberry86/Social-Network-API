const router = require('express').outer();
const {
    createReaction,
    deleteReaction
} = require('../../controllers/reaction-controller');





// POST, and DELETE at /api/thoughts/:id
router
.route('/:id')
.post(createReaction)
.delete(deleteReaction);



module.exports = router;