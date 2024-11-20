// personController.js
const db = require('../db');

// Get all users
exports.getPerson = (req, res) => {
    const query = 'SELECT * FROM orang_hilang';
    db.query(query, (err, results) => {
        if (err) {
            res.writeHead(500);
            res.end(JSON.stringify({ error: err.message }));
        } else {
            res.end(JSON.stringify(results));
        }
    });
};

// Add a new person
exports.addPerson = (req, res) => {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
        const { nama, ciri, tanggal_hilang, tanggal_ditemukan, foto, status } = JSON.parse(body);
        const query = 'INSERT INTO orang_hilang (nama, ciri, tanggal_hilang, tanggal_ditemukan, foto, status) VALUES (?, ?, ?, ?, ?, ?)';
        db.query(query, [nama, ciri, tanggal_hilang, tanggal_ditemukan, foto, status], (err, result) => {
            if (err) {
                res.writeHead(500);
                res.end(JSON.stringify({ error: err.message }));
            } else {
                res.writeHead(201);
                res.end(JSON.stringify({ message: 'Person added successfully', id: result.insertId }));
            }
        });
    });
};