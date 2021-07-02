// const router = require('express').Router();
// const { Op } = require('sequelize');
// const User = require('../models/User');
// const Thought = require('../models/Thought');
// const Reaction = require('../models/Reaction');
// const { findById } = require('../models/User');

// // get all users
// router.get('/api/users', (req, res) => {
//     User.findAll({}).then(results => {
//         res.json(results);
//     });
// });

// // GET a single user by its _id and populated thought and friend data
// router.get('/api/users/:_id', (req, res) => {
//     User.findById(req.params._id).then(results => {
//       if (results) {
//         res.json(results);
//     } else {
//         res.send(404);
//     }
//     })
    
// });

// // POST a new user
// router.post('api/users', (req, res) => {
//    User.create({
//        text: req.body.text,
//        complete: req.body.complete
//    }).then(dbUser => {
//        res.json(dbUser);
//    }); 
// });

// // PUT to update a user by its _id
// router.put('/api/users/:id', (req, res) => {
//     User.update(
//       {
//         text: req.body.text,
//         complete: req.body.complete
//       },
//       {
//         where: {
//           id: req.params.id
//         }
//       }
//     ).then(dbUser => {
//       res.json(dbUser);
//     });
//   });


// // DELETE to remove user by its _id
// router.delete('/api/users/:id', (req, res) => {
//     User.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(dbUser => {
//       res.json(dbUser);
//     });
//   });




// // /api/users/:userId/friends/:friendId

// // POST to add a new friend to a user's friend list
// router.post('/api/users/:userId/friends/:friendId', (req, res) => {
//     User.create({
//       text: req.body.text,
//       complete: req.body.complete
//     }).then(dbUser => {
//       res.json(dbUser);
//     });
//   });

// // DELETE to remove a friend from a user's friend list
// router.delete('/api/users/:userId/friends/:friendId', (req, res) => {
//     User.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(dbUser => {
//       res.json(dbUser);
//     });
//   });



// // /api/thoughts
// // GET to get all thoughts
// router.get('/api/thoughts', (req, res) => {
//     const result = findById(req.params._id, Thought);
//     if (result) {
//         res.json(result);
//     } else {
//         res.send(404);
//     }
// }); 

// // GET to get a single thought by its _id
// router.get('/api/thoughts', (req, res) => {
//     const result = findById(req.params._id, Thought);
//     if (result) {
//         res.json(result);
//     } else {
//         res.send(404);
//     }
// });

// // POST to create a new thought 
// router.post('api/thoughts', (req, res) => {
//     Thought.create({
//         text: req.body.text,
//         complete: req.body.complete
//     }).then(dbThought => {
//         res.json(dbThought);
//         // push the created thoughts _id to the associated users thoughts array field
//     }); 
//  });

//  //PUT to update a thought by its _id
//  router.put('/api/thoughts/:id', (req, res) => {
//     User.update(
//       {
//         text: req.body.text,
//         complete: req.body.complete
//       },
//       {
//         where: {
//           id: req.params.id
//         }
//       }
//     ).then(dbThought => {
//       res.json(dbThought);
//     });
//   });



//  // DELETE to remove a thought by its _id
//  router.delete('/api/thoughts/:id', (req, res) => {
//     Thought.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(dbThought => {
//       res.json(dbThought);
//     });
//   });



// // /api/thoughts/:thoughtId/reactions
// // POST to create a reaction stored in a single thought's reactions array field


// //  DELETE to pull and remove a reaction by the reaction's reactionId value

// module.exports = router;