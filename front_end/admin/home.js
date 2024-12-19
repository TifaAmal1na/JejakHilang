import loadDetail from './detail'; // Mengimpor fungsi loadDetail sebagai default

// URL API yang sesuai
const baseUrl = 'http://localhost:3000/api/orang_hilang';

export default function loadHome() {
  const mainContent = document.getElementById('main-content');
  mainContent.innerHTML = `
    <section class="header">
      <h1>Admin Dashboard</h1>
      <button id="logout-button">Logout</button>
    </section>
    <section class="search-bar">
      <input type="text" id="search-input" placeholder="Cari nama orang hilang...">
      <button id="search-button">Cari</button>
    </section>
    <section class="missing-list">
      <h2>Daftar Orang Hilang</h2>
      <div id="missing-list-container" class="list">
        <!-- Data akan dimuat di sini -->
      </div>
    </section>
  `;

  const container = document.getElementById('missing-list-container');
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');
  const logoutButton = document.getElementById('logout-button');

    // Mengembalikan user ke halaman utama (user biasa)
    logoutButton.addEventListener('click', () => {
      window.location.href = '/'; // Mengarahkan kembali ke halaman awal
    });
    
  
  // Variabel untuk menyimpan data orang hilang
  let orangHilang = [];

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

  // Fungsi untuk menangani delete
  const handleDelete = async (id) => {
    if (confirm('Apakah Anda yakin ingin menghapus data ini?')) {
      try {
        const response = await fetch(`${baseUrl}/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          alert('Data berhasil dihapus!');
          loadHome(); // Refresh daftar orang hilang setelah delete
        } else {
          alert('Gagal menghapus data.');
        }
      } catch (error) {
        console.error('Error deleting data:', error);
        alert('Terjadi kesalahan saat menghapus data.');
      }
    }
  };

  // Mengambil data orang hilang dari API
  fetch(baseUrl)
    .then(response => response.json())
    .then(data => {
      orangHilang = data; // Menyimpan data orang hilang

      // Menampilkan semua data orang hilang
      orangHilang.forEach(person => {
        const personCard = document.createElement('div');
        personCard.classList.add('person');
        personCard.innerHTML = `
          <img src="http://localhost:3000/uploads/${person.foto}" alt="${person.nama}">
          <p>${person.nama}</p>
          <div class="actions">
            <a href="#" data-id="${person.id}" class="detail-link">View More >></a>
            <button class="delete-button" data-id="${person.id}">Delete</button>
          </div>
        `;
        container.appendChild(personCard);
      });

      // Tambahkan event listener untuk tautan detail
      document.querySelectorAll('.detail-link').forEach(link => {
        link.addEventListener('click', event => {
          event.preventDefault();
          const personId = event.target.getAttribute('data-id');
          loadDetail(personId); // Memuat halaman detail
        });
      });

      // Tambahkan event listener untuk tombol delete
      document.querySelectorAll('.delete-button').forEach(button => {
        button.addEventListener('click', event => {
          const personId = event.target.getAttribute('data-id');
          handleDelete(personId);
        });
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      mainContent.innerHTML = '<p>Gagal memuat data.</p>';
    });

  // Event listener untuk tombol pencarian
  searchButton.addEventListener('click', () => {
    handleSearch();
  });
}
