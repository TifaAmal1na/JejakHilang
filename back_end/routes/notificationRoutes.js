const notificationController = require('../controllers/notificationController');

module.exports = {
    getNotifications: notificationController.getNotifications,
    addNotification: notificationController.addNotification,
};