const db = require('../db');
const multer = require('multer');
const path = require('path');

// Konfigurasi Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Folder untuk menyimpan file
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname)); // Format nama file
    }
});

const upload = multer({ storage });

// Get records yang belum ditemukan from orang_hilang
exports.getAllHilang = (req, res) => {
    const query = "SELECT * FROM orang_hilang";
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};

// Add a new record to orang_hilang
exports.addHilang = [
    upload.single('foto'), // Middleware untuk upload file
    (req, res) => {
      const { nama, ciri, tanggal_hilang, nomer_pelapor } = req.body;
      const tanggal_ditemukan = '0000-00-00'; // Default tanggal_ditemukan
      const status = 'Belum'; // Default status
      const foto = req.file ? req.file.filename : null; // Nama file yang diupload
  
      const query = `
        INSERT INTO orang_hilang (nama, ciri, tanggal_hilang, tanggal_ditemukan, foto, status, nomer_pelapor) 
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `;
  
      db.query(
        query,
        [nama, ciri, tanggal_hilang, tanggal_ditemukan, foto, status, nomer_pelapor],
        (err, result) => {
          if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ error: err.message });
          }
          res.status(201).json({ message: 'Record added successfully', id: result.insertId });
        }
      );
    },
  ];  

// Update an existing record in orang_hilang
exports.updateHilang = (req, res) => {
    const { id } = req.params;
    const { nama, ciri, tanggal_hilang, tanggal_ditemukan, foto, status, nomer_pelapor } = req.body;

    const query = `
        UPDATE orang_hilang 
        SET nama = ?, ciri = ?, tanggal_hilang = ?, tanggal_ditemukan = ?, foto = ?, status = ?, nomer_pelapor = ? 
        WHERE id = ?
    `;

    db.query(query, [nama, ciri, tanggal_hilang, tanggal_ditemukan, foto, status, nomer_pelapor, id], (err) => {
        if (err) {
            console.error('Error updating data:', err);
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ message: 'Record updated successfully' });
    });
};

// Delete a record from orang_hilang
exports.deleteHilang = (req, res) => {
    const { id } = req.params;

    const query = 'DELETE FROM orang_hilang WHERE id = ?';
    db.query(query, [id], (err) => {
        if (err) {
            console.error('Error deleting data:', err);
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ message: 'Record deleted successfully' });
    });
};

// // Get all record from orang_hilang
// exports.getAllOrangHilang = (req, res) => {
//     const query = "SELECT * FROM orang_hilang WHERE status = 'belum'";
//     db.query(query, (err, results) => {
//         if (err) {
//             console.error('Error fetching data:', err);
//             return res.status(500).json({ error: err.message });
//         }
//         res.status(200).json(results);
//     });
// };
