// detail.js

// URL API yang sesuai
const baseUrl = 'http://localhost:3000/api/orang_hilang';

export default function loadDetail(id) {
  const mainContent = document.getElementById('main-content');
  mainContent.innerHTML = `<p>Loading data...</p>`;

  // Mengambil data orang hilang berdasarkan ID dari API
  fetch(baseUrl)
    .then((response) => response.json())
    .then((data) => {
      // Mencari data dengan ID yang cocok
      const person = data.find((item) => item.id == id);

      if (person) {
        mainContent.innerHTML = `
          <section class="detail">
            <div class="image">
              <img src="http://localhost:3000/uploads/${person.foto}" alt="${person.nama}">
            </div>
            <div class="info">
              <h2>${person.nama}</h2>
              <p><strong>Tanggal Hilang:</strong> ${new Date(person.tanggal_hilang).toLocaleDateString()}</p>
              <p><strong>Ciri-ciri:</strong> ${person.ciri}</p>
              <p><strong>Tanggal Ditemukan:</strong> ${
                person.tanggal_ditemukan === "0000-00-00" ? "Belum ditemukan" : new Date(person.tanggal_ditemukan).toLocaleDateString()
              }</p>
              <button class="status-btn">${
                person.status === "sudah" ? "Sudah Ditemukan" : "Belum Ditemukan"
              }</button>
            </div>
          </section>
        `;
      } else {
        mainContent.innerHTML = '<p>Detail tidak ditemukan.</p>';
      }
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      mainContent.innerHTML = '<p>Gagal memuat detail.</p>';
    });
}
