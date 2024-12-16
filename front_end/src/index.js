// Mengimpor file CSS
import '../assets/style.css'; // Sesuaikan path relatif menuju folder assets

// Mengimpor modul yang diperlukan
import loadHome from '../pages/home.js';
import loadForm from '../pages/form.js'; 

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
    event.preventDefault(); // Mencegah reload halaman
    loadHome(); // Memanggil fungsi dari home.js untuk menampilkan halaman home
    window.history.pushState({}, '', '/home'); // Menambahkan route /home
    
    if (heroElement) {
      heroElement.style.display = 'flex';
    }
    
    drawer.classList.remove('active'); // Tutup menu drawer setelah klik
  });

  // Event listener untuk link Form
  formLink.addEventListener('click', (event) => {
    event.preventDefault(); // Mencegah reload halaman
    loadForm(); // Memanggil fungsi dari form.js untuk menampilkan form pelaporan
    window.history.pushState({}, '', '/form'); // Menambahkan route /form
    
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
    window.history.pushState({}, '', '/admin'); // Menambahkan route /home
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

  document.addEventListener('DOMContentLoaded', () => {
    // Ambil elemen pencarian
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
  
    // Fungsi untuk menangani pencarian
    const handleSearch = () => {
      const query = searchInput.value.trim().toLowerCase(); // Ambil nilai input dan konversi ke huruf kecil
      const persons = document.querySelectorAll('.person'); // Ambil semua elemen daftar orang
  
      persons.forEach(person => {
        const name = person.querySelector('p').textContent.toLowerCase(); // Ambil nama orang dari elemen
        if (name.includes(query)) {
          person.style.display = 'block'; // Tampilkan jika nama cocok
        } else {
          person.style.display = 'none'; // Sembunyikan jika tidak cocok
        }
      });
    };
  
    // Tambahkan event listener pada tombol pencarian
    searchButton.addEventListener('click', handleSearch);
  
    // Tambahkan event listener untuk pencarian saat mengetik
    searchInput.addEventListener('input', handleSearch);
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
