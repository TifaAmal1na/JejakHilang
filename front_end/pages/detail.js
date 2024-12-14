// detail.js
const baseUrl = 'http://localhost:3000/api/orang_hilang';

export default function loadDetail(id) {
  const mainContent = document.getElementById('main-content');
  
  // Tampilkan pesan loading sementara
  mainContent.innerHTML = `<p>Loading data...</p>`;
  const heroElement = document.querySelector('.hero'); // Ambil elemen hero
  
  // Sembunyikan elemen hero saat halaman detail dimuat
  if (heroElement) {
    heroElement.style.display = 'none';
  }

  // Mengambil data orang hilang berdasarkan ID dari API
  fetch(`${baseUrl}/${id}`) // Menggunakan ID untuk memanggil data yang spesifik
    .then((response) => response.json())
    .then((person) => {
      // Jika data ditemukan
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
              <p><strong>Nomor Pelapor:</strong> ${person.nomer_pelapor}</p>
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
