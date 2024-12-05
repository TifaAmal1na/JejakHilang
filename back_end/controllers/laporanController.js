const db = require('../db');

// Get all pelaporan
exports.getPelaporan = (req, res) => {
    const query = 'SELECT * FROM pelaporan';
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json(results);
        }
    });
};

// Add a new pelaporan
exports.addPelaporan = (req, res) => {
    console.log('Received POST request with body:', req.body);
    try {
        const { nama, ciri, tanggal_hilang, foto, nomer_pelapor } = req.body;

        // Validasi foto
        if (!foto) {
            return res.status(400).json({ error: "Foto is required" });
        }

        const query = 'INSERT INTO pelaporan (nama, ciri, tanggal_hilang, foto, nomer_pelapor) VALUES (?, ?, ?, ?, ?)';
        db.query(query, [nama, ciri, tanggal_hilang, foto, nomer_pelapor], (err, result) => {
            if (err) {
                console.error('Error executing query:', err);
                res.status(500).json({ error: err.message });
            } else {
                res.status(201).json({ message: 'Laporan added successfully', id: result.insertId });
            }
        });
    } catch (error) {
        console.error('Invalid JSON:', error);
        res.status(400).json({ error: "Invalid JSON format" });
    }
};

// Delete a pelaporan by ID
exports.deletePelaporan = (req, res) => {
    const { id } = req.params; // Ambil ID dari parameter URL

    const query = 'DELETE FROM pelaporan WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: err.message });
        }

        if (result.affectedRows === 0) {
            // Jika tidak ada data yang dihapus
            return res.status(404).json({ message: `No pelaporan found with ID ${id}` });
        }

        // Berhasil menghapus data
        res.status(200).json({ message: `Pelaporan with ID ${id} deleted successfully` });
    });
};

// Update a pelaporan by ID
exports.updatePelaporan = (req, res) => {
    const { id } = req.params; // Ambil ID dari parameter URL
    const { nama, ciri, tanggal_hilang, foto, nomer_pelapor } = req.body; // Ambil data dari body request

    // Validasi jika data tidak lengkap
    if (!nama || !ciri || !tanggal_hilang || !foto || !nomer_pelapor) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const query = `
        UPDATE pelaporan 
        SET nama = ?, ciri = ?, tanggal_hilang = ?, foto = ?, nomer_pelapor = ? 
        WHERE id = ?
    `;

    db.query(query, [nama, ciri, tanggal_hilang, foto, nomer_pelapor, id], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: err.message });
        }

        if (result.affectedRows === 0) {
            // Jika tidak ada data yang diperbarui
            return res.status(404).json({ message: `No pelaporan found with ID ${id}` });
        }

        // Berhasil memperbarui data
        res.status(200).json({ message: `Pelaporan with ID ${id} updated successfully` });
    });
};


