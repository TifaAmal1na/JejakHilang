const db = require('../db');

// Get all notifications
exports.getNotifications = (req, res) => {
    const query = 'SELECT * FROM notification ORDER BY id DESC';

    db.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: err.message });
        }

        // Berhasil mengambil data
        res.status(200).json(results);
    });
};
