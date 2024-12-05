const express = require('express');
const router = express.Router();

// Import controller
const usersController = require('../controllers/usersController');

// GET untuk mengambil semua users
router.get('/', usersController.getUsers);

module.exports = router;
