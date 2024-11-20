const personController = require('../controllers/personController');

module.exports = {
    getPerson: personController.getPerson,
    addPerson: personController.addPerson,
};