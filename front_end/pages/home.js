// home.js
import loadDetail from './detail'; // Mengimpor fungsi loadDetail sebagai default

// URL API yang sesuai
const baseUrl = 'http://localhost:3000/api/orang_hilang';

export default function loadHome() {
  const mainContent = document.getElementById('main-content');
  mainContent.innerHTML = `
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

  // Mengambil data orang hilang dari API
  fetch(baseUrl)
    .then(response => response.json())
    .then(data => {
      orangHilang = data; // Menyimpan data orang hilang

      // Menampilkan semua data orang hilang tanpa filter (untuk awal)
      orangHilang.forEach(person => {
        const personCard = document.createElement('div');
        personCard.classList.add('person');
        personCard.innerHTML = `
          <img src="http://localhost:3000/uploads/${person.foto}" alt="${person.nama}">
          <p>${person.nama}</p>
          <a href="#" data-id="${person.id}" class="detail-link">View More >></a>
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
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      mainContent.innerHTML = '<p>Gagal memuat data.</p>';
    });

  // Event listener untuk tombol pencarian
  searchButton.addEventListener('click', () => {
    // Pertama, sembunyikan semua orang hilang yang ada
    const persons = document.querySelectorAll('.person');
    persons.forEach(person => {
      person.style.display = 'none';
    });

    // Lakukan pencarian dan tampilkan hasil yang cocok
    handleSearch();
  });
}
