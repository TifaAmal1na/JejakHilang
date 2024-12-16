// Mengimpor file CSS
import '../assets/style.css'; // Sesuaikan path relatif menuju folder assets

// Mengimpor modul yang diperlukan
import loadHome from '../pages/home.js';
import loadForm from '../pages/form.js'; 
// import loadLogin from '../pages/login.js';

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

  // Pastikan .hero terlihat di halaman Home
  if (heroElement) {
    heroElement.style.display = 'flex'; 
  }

  // Event listener untuk link Home
  homeLink.addEventListener('click', (event) => {
    event.preventDefault(); // Mencegah reload halaman
    loadHome(); // Memanggil fungsi dari home.js untuk menampilkan halaman home
    
    if (heroElement) {
      heroElement.style.display = 'flex';
    }
    
    drawer.classList.remove('active'); // Tutup menu drawer setelah klik
  });

  // Event listener untuk link Form
  formLink.addEventListener('click', (event) => {
    event.preventDefault(); // Mencegah reload halaman
    loadForm(); // Memanggil fungsi dari form.js untuk menampilkan form pelaporan
    
    if (heroElement) {
      heroElement.style.display = 'none'; // Menyembunyikan .hero hanya di halaman form
    }
    
    drawer.classList.remove('active'); // Tutup menu drawer setelah klik
  });

  // Event listener untuk link Login Admin
  loginLink.addEventListener('click', (event) => {
    event.preventDefault(); // Mencegah pengalihan halaman
    const loginModal = document.getElementById('login-modal');
    loginModal.style.display = 'block'; // Menampilkan modal login
  });

  // Mendapatkan elemen tombol close dan modal login
  const closeButton = document.getElementById('close-login');
  const modal = document.getElementById('login-modal');

  // Menambahkan event listener untuk menutup modal ketika tombol X diklik
  closeButton.addEventListener('click', () => {
    modal.style.display = 'none'; // Menutup modal login
  });

  // Menambahkan event listener untuk menutup modal jika klik di luar modal
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none'; // Menutup modal jika klik di luar modal
    }
  });

  // Event listener untuk membuka menu navigasi (drawer)
  hamburger.addEventListener('click', () => {
    drawer.classList.add('active'); // Tambahkan kelas untuk menampilkan drawer
  });

  // Event listener untuk menutup menu navigasi (drawer)
  closeDrawer.addEventListener('click', () => {
    drawer.classList.remove('active'); // Hapus kelas untuk menyembunyikan drawer
  });

  // Event listener untuk form login
  const loginForm = document.getElementById('login-form'); // Ambil elemen form login

  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Mencegah form reload halaman

    const username = document.getElementById('username').value; // Ambil input username
    const password = document.getElementById('password').value; // Ambil input password
    const modal = document.getElementById('login-modal');

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
        // ubah direct dibawah ini
        window.location.href = 'http://localhost:9001/admin-dashboard'; // ubah direct yaa, tidak ada route dan end point ini
      } else {
        alert(result.message || 'Username atau Password salah.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Terjadi kesalahan. Silakan coba lagi.');
    }
  });
});
