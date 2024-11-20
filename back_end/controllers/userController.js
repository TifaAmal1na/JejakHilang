// userController.js
const db = require('../db');

exports.getUser = (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if (err) {
            res.writeHead(500);
            res.end(JSON.stringify({ error: err.message }));
        } else {
            res.end(JSON.stringify(results));
        }
    });
};

exports.addUser = (req, res) => {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
        const { username, password } = JSON.parse(body);
        const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
        db.query(query, [username, password], (err, result) => {
            if (err) {
                res.writeHead(500);
                res.end(JSON.stringify({ error: err.message }));
            } else {
                res.writeHead(201);
                res.end(JSON.stringify({ message: 'User added successfully', id: result.insertId }));
            }
        });
    });
};
