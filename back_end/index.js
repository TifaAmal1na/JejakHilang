const cors = require('cors');
const express = require('express');
const path = require('path');
const app = express();

// Import Routes
const usersRoutes = require('./routes/usersRoutes');
const notificationsRoutes = require('./routes/notificationsRoutes');
const hilangRoutes = require('./routes/hilangRoutes');

// Middleware untuk parsing JSON body
app.use(express.json());

// Enable CORS - Restrict to frontend origin in production
const corsOptions = {
  origin: 'http://localhost:9001',  // Set to your frontend URL
};
app.use(cors(corsOptions));

// Melayani file di folder 'uploads'
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routing untuk API
app.use('/api/users', usersRoutes);
app.use('/api/notifications', notificationsRoutes);
app.use('/api/orang_hilang', hilangRoutes);

// Melayani file frontend (Webpack build output di folder frontend/dist)
app.use(express.static(path.resolve(__dirname, '../front_end/dist')));

// Semua permintaan frontend dilayani dengan file `index.html`
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../front_end/dist/index.html'));
});

// Setup port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
