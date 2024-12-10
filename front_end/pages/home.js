// home.js
import loadDetail from './detail'; // Mengimpor fungsi loadDetail sebagai default

// URL API yang sesuai
const baseUrl = 'http://localhost:3000/api/orang_hilang';

export default function loadHome() {
  const mainContent = document.getElementById('main-content');
  mainContent.innerHTML = `
    <section class="missing-list">
      <h2>Daftar Orang Hilang</h2>
      <div id="missing-list-container" class="list">
        <!-- Data akan dimuat di sini -->
      </div>
    </section>
  `;

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
}
