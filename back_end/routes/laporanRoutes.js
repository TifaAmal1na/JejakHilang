const express = require('express');
const router = express.Router();

// Import controller yang sesuai
const pelaporanController = require('../controllers/laporanController');

// GET untuk mengambil pelaporan
router.get('/pelaporan', (req, res) => {
    res.status(200).json({ message: 'Route works' });
});


// POST untuk menambah pelaporan
router.post('/add', pelaporanController.addPelaporan);

// DELETE untuk menghapus pelaporan berdasarkan ID
router.delete('/:id', pelaporanController.deletePelaporan);

// PUT untuk memperbarui pelaporan berdasarkan ID
router.put('/:id', pelaporanController.updatePelaporan);


module.exports = router;
