const express = require('express');
const router = express.Router();

// Import controller yang sesuai
const pelaporanController = require('../controllers/laporanController');

// Import multer untuk upload file
const multer = require('multer');

// Setup multer untuk mengelola file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Menyimpan file di folder 'uploads'
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Menyimpan file dengan nama unik
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Batasi ukuran file maksimal 5MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);  // Terima file gambar
    } else {
      cb(new Error('Only image files are allowed!'), false);  // Tolak selain gambar
    }
  }
});

// GET untuk mengambil pelaporan
router.get('/pelaporan', (req, res) => {
  res.status(200).json({ message: 'Route works' });
});

// POST untuk menambah pelaporan dengan file upload
// Gunakan middleware multer untuk menangani file
router.post('/add', upload.single('foto'), pelaporanController.addPelaporan);

// DELETE untuk menghapus pelaporan berdasarkan ID
router.delete('/:id', pelaporanController.deletePelaporan);

// PUT untuk memperbarui pelaporan berdasarkan ID
router.put('/:id', pelaporanController.updatePelaporan);

module.exports = router;
