const express = require("express");
const router = express.Router();

const {
  createUser,
  updateUserColor,
  getUserById,
} = require('../controllers/user');

router.get('/users', getUserById);
router.post('/users', createUser);
router.put('/users/:id', updateUserColor);

module.exports = router;
