const userController = require('../controllers/userController');

module.exports = {
    getUser: userController.getUser,
    addUser: userController.addUser,
};