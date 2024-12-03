// Mengimpor file CSS
import '../assets/style.css'; // Sesuaikan path relatif menuju folder assets

// Mengimpor modul yang diperlukan
import loadHome from '../pages/home.js';
import loadForm from '../pages/form.js'; // Mengimpor form.js

// Menambahkan kode JavaScript untuk interaktivitas
document.addEventListener('DOMContentLoaded', () => {
  const homeLink = document.getElementById('home-link');
  const formLink = document.getElementById('form-link');
  const mainContent = document.getElementById('main-content');
  const hamburger = document.getElementById('hamburger');
  const drawer = document.getElementById('drawer');
  const closeDrawer = document.getElementById('closeDrawer');

  // Tampilkan halaman home saat pertama kali membuka halaman
  loadHome();

  // Event listener untuk link Home
  homeLink.addEventListener('click', (event) => {
    event.preventDefault(); // Mencegah reload halaman
    loadHome(); // Memanggil fungsi dari home.js untuk menampilkan halaman home
    drawer.classList.remove('active'); // Tutup menu drawer setelah klik
  });

  // Event listener untuk link Form
  formLink.addEventListener('click', (event) => {
    event.preventDefault(); // Mencegah reload halaman
    loadForm(); // Memanggil fungsi dari form.js untuk menampilkan form pelaporan
    drawer.classList.remove('active'); // Tutup menu drawer setelah klik
  });

  // Event listener untuk membuka menu navigasi (drawer)
  hamburger.addEventListener('click', () => {
    drawer.classList.add('active'); // Tambahkan kelas untuk menampilkan drawer
  });

  // Event listener untuk menutup menu navigasi (drawer)
  closeDrawer.addEventListener('click', () => {
    drawer.classList.remove('active'); // Hapus kelas untuk menyembunyikan drawer
  });
});
