// notificationController.js
const db = require('../db');

// Get all notifications
exports.getNotifications = (req, res) => {
    const query = 'SELECT * FROM notification ORDER BY id DESC';
    db.query(query, (err, results) => {
        if (err) {
            res.writeHead(500);
            res.end(JSON.stringify({ error: err.message }));
        } else {
            res.end(JSON.stringify(results));
        }
    });
};

// Add new notification
exports.addNotification = (req, res) => {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
        const { id_orang, status } = JSON.parse(body);
        const query = 'INSERT INTO notification (id_orang, status) VALUES (?, ?)';
        db.query(query, [id_orang, status], (err, result) => {
            if (err) {
                res.writeHead(500);
                res.end(JSON.stringify({ error: err.message }));
            } else {
                res.writeHead(201);
                res.end(JSON.stringify({ message: 'Notification added successfully', id: result.insertId }));
            }
        });
    });
};