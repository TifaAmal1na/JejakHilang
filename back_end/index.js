const cors = require('cors');
const express = require('express');
const path = require('path');
const multer = require('multer');
const app = express();

// Import Routes
const pelaporanRoutes = require('./routes/laporanRoutes');
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

// Setup multer untuk mengelola file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Menyimpan file di folder 'uploads'
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Menyimpan file dengan nama unik
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Batasi ukuran file maksimal 5MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);  // Terima file gambar
    } else {
      cb(new Error('Only image files are allowed!'), false);  // Tolak selain gambar
    }
  }
});

// Middleware untuk file upload
// Gunakan middleware untuk file upload dengan field 'foto'
app.use('/api/pelaporan/add', upload.single('foto')); 

// Routing untuk API
app.use('/api/pelaporan', pelaporanRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/notifications', notificationsRoutes);
app.use('/api/orang_hilang', hilangRoutes);

// Melayani file gambar yang diupload
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

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
