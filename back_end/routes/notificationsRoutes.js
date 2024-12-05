const express = require('express');
const router = express.Router();

// Import controller
const notificationsController = require('../controllers/notificationsController');

// GET untuk mengambil semua notifications
router.get('/', notificationsController.getNotifications);

module.exports = router;
