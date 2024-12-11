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

// Login User
exports.loginUser = (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }

    // Query untuk mencocokkan username dan password
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    db.query(query, [username, password], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: err.message });
        }

        // Cek apakah user ditemukan
        if (results.length === 0) {
            return res.status(401).json({ message: 'Invalid username or password.' });
        }

        // Jika login berhasil, kembalikan user data (opsional: filter password)
        const user = results[0];
        delete user.password; // Hindari mengirim password kembali ke client
        res.status(200).json({ message: 'Login successful', user });
    });
};
