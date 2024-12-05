const express = require('express');
const app = express();
const pelaporanRoutes = require('./routes/laporanRoutes');
const usersRoutes = require('./routes/usersRoutes');
const notificationsRoutes = require('./routes/notificationsRoutes');
const hilangRoutes = require('./routes/hilangRoutes');

// Middleware untuk parsing JSON body
app.use(express.json());

// Gunakan routing pelaporan
app.use('/api/pelaporan', pelaporanRoutes);

// routing users
app.use('/api/users', usersRoutes);

// Routing untuk notifications
app.use('/api/notifications', notificationsRoutes);

// Routing untuk orang_hilang
app.use('/api/orang_hilang', hilangRoutes);

// Setup port
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
