import data from '../data/dummy.json'; // Mengimpor data dari dummy.json

// Ekspor fungsi loadDetail sebagai default
export default function loadDetail(id) {
  const mainContent = document.getElementById('main-content');
  mainContent.innerHTML = `<p>Loading data...</p>`;

  // Mencari orang hilang berdasarkan ID
  const person = data.orangHilang[0].orang_hilang.find(p => p.id === parseInt(id));

  if (person) {
    mainContent.innerHTML = `
      <section class="detail">
        <div class="image">
          <img src="${person.foto}" alt="${person.nama}">
        </div>
        <div class="info">
          <h2>${person.nama}</h2>
          <p>Tanggal Hilang: ${person.tanggal_hilang}</p>
          <p>Ciri-ciri: ${person.ciri}</p>
          <p>Tanggal Ditemukan: ${person.tanggal_ditemukan || 'Belum ditemukan'}</p>
          <button class="status-btn">${person.status}</button>
        </div>
      </section>
    `;
  } else {
    mainContent.innerHTML = '<p>Detail tidak ditemukan.</p>';
  }
}
