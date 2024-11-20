// index.js
const http = require('http');
const personRoutes = require('./routes/personRoutes');
const userRoutes = require('./routes/userRoutes');
const notificationRoutes = require('./routes/notificationRoutes');

const PORT = 3000;

const server = http.createServer((req, res) => {
    // Set common headers for CORS and JSON response
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    // Routing logic based on URL and method
    if (req.url.startsWith('/api/person') && req.method === 'GET') {
        personRoutes.getPerson(req, res);
    } else if (req.url.startsWith('/api/person') && req.method === 'POST') {
        personRoutes.addPerson(req, res);
    } else if (req.url.startsWith('/api/user') && req.method === 'GET') {
        userRoutes.getUser(req, res);
    } else if (req.url.startsWith('/api/user') && req.method === 'POST') {
        userRoutes.addUser(req, res);    
    } else if (req.url.startsWith('/api/notifications') && req.method === 'GET') {
        notificationRoutes.getNotifications(req, res);
    } else if (req.url.startsWith('/api/notifications') && req.method === 'POST') {
        notificationRoutes.addNotification(req, res);
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: 'Route not found' }));
    }
});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});