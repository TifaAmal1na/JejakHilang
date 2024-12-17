const express = require('express');
const router = express.Router();
const hilangController = require('../controllers/hilangController');

// CRUD Routes for orang_hilang
router.get('/', hilangController.getAllHilang); // Get orang hilang where status belum ditemukan
// router.get('/all', hilangController.getAllOrangHilang); // get all record orang hilang
router.post('/add', hilangController.addHilang); // Add a new record
router.put('/:id', hilangController.updateHilang); // Update a record
router.delete('/:id', hilangController.deleteHilang); // Delete a record

module.exports = router;
