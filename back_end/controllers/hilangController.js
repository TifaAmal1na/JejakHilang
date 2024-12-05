const db = require('../db');

// Get all records from orang_hilang
exports.getAllHilang = (req, res) => {
    const query = 'SELECT * FROM orang_hilang';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json(results);
    });
};

// Add a new record to orang_hilang
exports.addHilang = (req, res) => {
    const { nama, ciri, tanggal_hilang, tanggal_ditemukan, foto, status, id_pelaporan } = req.body;

    const query = `
        INSERT INTO orang_hilang (nama, ciri, tanggal_hilang, tanggal_ditemukan, foto, status, id_pelaporan) 
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(query, [nama, ciri, tanggal_hilang, tanggal_ditemukan, foto, status, id_pelaporan], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Record added successfully', id: result.insertId });
    });
};

// Update an existing record in orang_hilang
exports.updateHilang = (req, res) => {
    const { id } = req.params;
    const { nama, ciri, tanggal_hilang, tanggal_ditemukan, foto, status, id_pelaporan } = req.body;

    const query = `
        UPDATE orang_hilang 
        SET nama = ?, ciri = ?, tanggal_hilang = ?, tanggal_ditemukan = ?, foto = ?, status = ?, id_pelaporan = ? 
        WHERE id = ?
    `;

    db.query(query, [nama, ciri, tanggal_hilang, tanggal_ditemukan, foto, status, id_pelaporan, id], (err) => {
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
