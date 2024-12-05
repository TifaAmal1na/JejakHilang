const db = require('../db'); // Koneksi ke database

// Get all users
exports.getUsers = (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: err.message });
        }
        // Jika berhasil, kembalikan data users
        res.status(200).json(results);
    });
};
