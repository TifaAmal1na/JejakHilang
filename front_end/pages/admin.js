// home.js
import loadDetail from './detail'; // Mengimpor fungsi loadDetail sebagai default

// URL API yang sesuai
const baseUrl = 'http://localhost:3000/api/orang_hilang';

let isLoggedIn = false; // Status login admin

export default function loadHome() {
  const mainContent = document.getElementById('main-content');

  if (!isLoggedIn) {
    // Tampilkan form login jika belum login
    mainContent.innerHTML = `
      <section class="admin-login">
        <h2>Login Admin</h2>
        <form id="login-form">
          <label for="username">Username:</label>
          <input type="text" id="username" required>
          <label for="password">Password:</label>
          <input type="password" id="password" required>
          <button type="submit">Login</button>
        </form>
      </section>
    `;

    document.getElementById('login-form').addEventListener('submit', event => {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      // Login melalui API
      fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Login gagal');
          }
        })
        .then(data => {
          isLoggedIn = true;
          alert('Login berhasil!');
          loadHome(); // Muat ulang halaman setelah login
        })
        .catch(error => {
          alert('Username atau password salah!');
          console.error('Error during login:', error);
        });
    });

    return;
  }

  mainContent.innerHTML = `
    <section class="admin-header">
      <h2>Welcome, Admin</h2>
      <button id="logout-button">Logout</button>
    </section>
    <section class="missing-list">
      <h2>Daftar Orang Hilang</h2>
      <div id="missing-list-container" class="list">
        <!-- Data akan dimuat di sini -->
      </div>
    </section>
  `;

  document.getElementById('logout-button').addEventListener('click', () => {
    isLoggedIn = false;
    alert('Logout berhasil!');
    loadHome(); // Muat ulang halaman setelah logout
  });

  const container = document.getElementById('missing-list-container');

  // Mengambil data orang hilang dari API
  fetch(baseUrl)
    .then(response => response.json())
    .then(data => {
      const orangHilang = data; // Asumsi data dari API memiliki struktur ini
      orangHilang.forEach(person => {
        const personCard = document.createElement('div');
        personCard.classList.add('person');
        personCard.innerHTML = `
          <img src="http://localhost:3000/uploads/${person.foto}" alt="${person.nama}">
          <p>${person.nama}</p>
          <button data-id="${person.id}" class="detail-link">Detail</button>
          <button data-id="${person.id}" class="delete-button">Delete</button>
        `;
        container.appendChild(personCard);
      });

      // Event listener untuk tombol detail
      document.querySelectorAll('.detail-link').forEach(button => {
        button.addEventListener('click', event => {
          const personId = event.target.getAttribute('data-id');
          loadDetail(personId); // Memuat halaman detail
        });
      });

      // Event listener untuk tombol delete
      document.querySelectorAll('.delete-button').forEach(button => {
        button.addEventListener('click', event => {
          const personId = event.target.getAttribute('data-id');
          if (confirm('Apakah Anda yakin ingin menghapus data ini?')) {
            fetch(`${baseUrl}/${personId}`, { method: 'DELETE' })
              .then(response => {
                if (response.ok) {
                  alert('Data berhasil dihapus!');
                  loadHome(); // Refresh halaman setelah delete
                } else {
                  throw new Error('Gagal menghapus data.');
                }
              })
              .catch(error => {
                console.error('Error deleting data:', error);
                alert('Terjadi kesalahan saat menghapus data.');
              });
          }
        });
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      container.innerHTML = '<p>Gagal memuat data.</p>';
    });
}
