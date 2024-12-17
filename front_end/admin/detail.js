// detail.js
const baseUrl = 'http://localhost:3000/api/orang_hilang';

export default function loadDetail(id) {
  const mainContent = document.getElementById('main-content');
  mainContent.innerHTML = `<p>Loading data...</p>`;
  const heroElement = document.querySelector('.hero'); // Ambil elemen hero

  window.history.pushState({}, '', '/detail-update'); // Menambahkan route /detail
  // Sembunyikan elemen hero saat halaman detail dimuat
  if (heroElement) {
    heroElement.style.display = 'none';
  }

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
              <p><strong>Nomor Pelapor:</strong> ${person.nomer_pelapor}</p>
              <p><strong>Tanggal Ditemukan:</strong> ${
                person.tanggal_ditemukan === "0000-00-00" ? "Belum ditemukan" : new Date(person.tanggal_ditemukan).toLocaleDateString()
              }</p>
              <button class="status-btn">${
                person.status === "sudah" ? "Sudah Ditemukan" : "Belum Ditemukan"
              }</button>
              <button class="update-btn" data-id="${person.id}">Update Data</button>
            </div>
          </section>
        `;

        // Tambahkan event listener untuk tombol Update
        const updateBtn = document.querySelector('.update-btn');
        updateBtn.addEventListener('click', () => {
          loadUpdate(person.id); // Memuat halaman update untuk ID orang hilang
        });
      } else {
        mainContent.innerHTML = '<p>Detail tidak ditemukan.</p>';
      }
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      mainContent.innerHTML = '<p>Gagal memuat detail.</p>';
    });
}

// Fungsi untuk memuat halaman update
function loadUpdate(id) {
    const mainContent = document.getElementById('main-content');
    window.history.pushState({}, '', `/update/${id}`); // Menambahkan route /update/:id
    mainContent.innerHTML = `
      <h2>Update Data Orang Hilang</h2>
      <form id="update-form" enctype="multipart/form-data">
        <label for="nama">Nama:</label>
        <input type="text" id="nama" name="nama" required>
  
        <label for="ciri">Ciri-ciri:</label>
        <textarea id="ciri" name="ciri" required></textarea>
  
        <label for="tanggal_hilang">Tanggal Hilang:</label>
        <input type="date" id="tanggal_hilang" name="tanggal_hilang" required>
  
        <label for="tanggal_ditemukan">Tanggal Ditemukan:</label>
        <input type="date" id="tanggal_ditemukan" name="tanggal_ditemukan">
  
        <label for="foto">Foto:</label>
        <input type="file" id="foto" name="foto" accept="image/*">
        <div id="preview-container">
          <p>Preview Foto:</p>
          <img id="foto-preview" src="" alt="Preview Foto" style="max-width: 200px; max-height: 200px;">
        </div>
  
        <label for="status">Status:</label>
        <select id="status" name="status" required>
          <option value="belum">Belum Ditemukan</option>
          <option value="sudah">Sudah Ditemukan</option>
        </select>
  
        <label for="nomer_pelapor">Nomor Pelapor:</label>
        <input type="text" id="nomer_pelapor" name="nomer_pelapor" required>
  
        <button type="submit">Submit</button>
      </form>
    `;
  
    // Mengisi form dengan data orang hilang berdasarkan ID
    fetch(`http://localhost:3000/api/orang_hilang`)
      .then((response) => response.json())
      .then((data) => {
        const person = data.find((item) => item.id == id);
        if (person) {
          document.getElementById('nama').value = person.nama;
          document.getElementById('ciri').value = person.ciri;
          document.getElementById('tanggal_hilang').value = person.tanggal_hilang.split('T')[0];
          document.getElementById('tanggal_ditemukan').value = person.tanggal_ditemukan !== "0000-00-00" ? person.tanggal_ditemukan.split('T')[0] : "";
          document.getElementById('status').value = person.status;
          document.getElementById('nomer_pelapor').value = person.nomer_pelapor;
  
          const fotoPreview = document.getElementById('foto-preview');
          fotoPreview.src = `http://localhost:3000/uploads/${person.foto}`;
        } else {
          mainContent.innerHTML = '<p>Data tidak ditemukan untuk diupdate.</p>';
        }
      })
      .catch((error) => {
        console.error('Error fetching data for update:', error);
        alert('Gagal memuat data untuk diupdate.');
      });
  
    // Event listener untuk preview foto
    const fotoInput = document.getElementById('foto');
    fotoInput.addEventListener('change', (event) => {
      const file = event.target.files[0];
      const preview = document.getElementById('foto-preview');
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          preview.src = e.target.result;
        };
        reader.readAsDataURL(file);
      } else {
        preview.src = '';
      }
    });
  
    // Event listener untuk submit form
    const form = document.getElementById('update-form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const formData = new FormData();
      formData.append('nama', document.getElementById('nama').value);
      formData.append('ciri', document.getElementById('ciri').value);
      formData.append('tanggal_hilang', document.getElementById('tanggal_hilang').value);
      formData.append('tanggal_ditemukan', document.getElementById('tanggal_ditemukan').value || "0000-00-00");
      formData.append('status', document.getElementById('status').value);
      formData.append('nomer_pelapor', document.getElementById('nomer_pelapor').value);
  
      // Tambahkan file jika ada foto yang diupload
      const fotoFile = document.getElementById('foto').files[0];
      if (fotoFile) {
        formData.append('foto', fotoFile);
      }
  
      fetch(`http://localhost:3000/api/orang_hilang/${id}`, {
        method: 'PUT',
        body: formData, // Mengirim data sebagai FormData
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Gagal memperbarui data');
          }
          return response.json();
        })
        .then((updatedData) => {
          alert('Data berhasil diperbarui');
          loadDetail(id); // Kembali ke halaman detail
        })
        .catch((error) => {
          console.error('Error updating data:', error);
          alert('Terjadi kesalahan saat memperbarui data');
        });
    });
  }
  