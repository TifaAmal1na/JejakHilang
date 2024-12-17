// Mengimpor file CSS
import '../assets/style.css'; // Sesuaikan path relatif menuju folder assets

// Mengimpor modul yang diperlukan
import loadHome from '../pages/home.js';
import loadForm from '../pages/form.js';
import loadAdminForm from '../admin/home.js'; // Import fungsi khusus halaman admin

// Menambahkan kode JavaScript untuk interaktivitas
document.addEventListener('DOMContentLoaded', () => {
  const homeLink = document.getElementById('home-link');
  const formLink = document.getElementById('form-link');
  const loginLink = document.getElementById('login-link'); // Tombol Login Admin
  const mainContent = document.getElementById('main-content');
  const hamburger = document.getElementById('hamburger');
  const drawer = document.getElementById('drawer');
  const closeDrawer = document.getElementById('closeDrawer');
  const heroElement = document.querySelector('.hero');

  // Tampilkan halaman home saat pertama kali membuka halaman
  loadHome();
  window.history.pushState({}, '', '/home'); // Menambahkan route /home

  // Pastikan .hero terlihat di halaman Home
  if (heroElement) {
    heroElement.style.display = 'flex';
  }

  // Event listener untuk link Home
  homeLink.addEventListener('click', (event) => {
    event.preventDefault();
    loadHome();
    window.history.pushState({}, '', '/home');
    if (heroElement) {
      heroElement.style.display = 'flex';
    }
    drawer.classList.remove('active');
  });

  // Event listener untuk link Form
  formLink.addEventListener('click', (event) => {
    event.preventDefault();
    loadForm();
    window.history.pushState({}, '', '/form');
    if (heroElement) {
      heroElement.style.display = 'none';
    }
    drawer.classList.remove('active');
  });

  // Event listener untuk link Login Admin
  loginLink.addEventListener('click', (event) => {
    event.preventDefault();
    const loginModal = document.getElementById('login-modal');
    loginModal.style.display = 'block';
    window.history.pushState({}, '', '/admin');
  });

  // Mendapatkan elemen tombol close dan modal login
  const closeButton = document.getElementById('close-login');
  const modal = document.getElementById('login-modal');

  // Menambahkan event listener untuk menutup modal
  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Event listener untuk form login
  const loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
      // Kirim data login ke server
      const response = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Login Berhasil!');
        modal.style.display = 'none'; // Tutup modal login
        
        // Muat halaman admin setelah login berhasil
        loadAdminForm();
        window.history.pushState({}, '', '/admin-dashboard');
      } else {
        alert(result.message || 'Username atau Password salah.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Terjadi kesalahan. Silakan coba lagi.');
    }
  });

  // Event listener untuk membuka menu navigasi (drawer)
  hamburger.addEventListener('click', () => {
    drawer.classList.add('active');
  });

  // Event listener untuk menutup menu navigasi (drawer)
  closeDrawer.addEventListener('click', () => {
    drawer.classList.remove('active');
  });
});
