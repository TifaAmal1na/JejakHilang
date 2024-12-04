// Mengimpor loadDetail sebagai default
import loadDetail from './detail'; // Mengimpor fungsi loadDetail sebagai default

import data from '../data/dummy.json'; // Mengimpor data dummy.json

// Mengambil data orang hilang
const orangHilang = data.orangHilang[0].orang_hilang; // Mengakses array orang_hilang dalam orangHilang

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

  orangHilang.forEach(person => {
    const personCard = document.createElement('div');
    personCard.classList.add('person');
    personCard.innerHTML = `
      <img src="${person.foto}" alt="${person.nama}">
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
}
