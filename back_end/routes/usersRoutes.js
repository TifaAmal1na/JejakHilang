const express = require('express');
const router = express.Router();

// Import controller
const usersController = require('../controllers/usersController');

// GET untuk mengambil semua users
router.get('/', usersController.getUsers);

// POST untuk login user
router.post('/login', usersController.loginUser);

module.exports = router;
