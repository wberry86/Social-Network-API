const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller');

// GET all and POST at /api/users
router
.route('/')
.get(getAllUsers)
.post(createUser);

// GET one, PUT, and DELETE at /api/Users/:id
router
.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

// Post and Delete at /api/users/:userId/friends/:friendId
router
.route('/:userId/:friendId')

module.exports = router;