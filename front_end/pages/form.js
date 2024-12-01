// form.js

export default function loadForm() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
      <section class="form-section">
        <h2>Form Pelaporan Orang Hilang</h2>
        <form id="missing-form">
          <div class="form-group">
            <label for="nama">Nama</label>
            <input type="text" id="nama" name="nama" required>
          </div>
          <div class="form-group">
            <label for="foto">Foto URL</label>
            <input type="url" id="foto" name="foto" required>
          </div>
          <div class="form-group">
            <label for="tanggal_hilang">Tanggal Hilang</label>
            <input type="date" id="tanggal_hilang" name="tanggal_hilang" required>
          </div>
          <div class="form-group">
            <label for="ciri">Ciri-ciri</label>
            <textarea id="ciri" name="ciri" required></textarea>
          </div>
          <div class="form-group">
            <button type="submit">Laporkan</button>
          </div>
        </form>
      </section>
    `;
  
    // Menambahkan event listener untuk form submit
    document.getElementById('missing-form').addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Ambil data dari form
      const nama = document.getElementById('nama').value;
      const foto = document.getElementById('foto').value;
      const tanggalHilang = document.getElementById('tanggal_hilang').value;
      const ciri = document.getElementById('ciri').value;
  
      // Kirim data ke server atau simpan ke lokal
      console.log('Form Submitted:', { nama, foto, tanggalHilang, ciri });
  
      // Menampilkan notifikasi
      alert('Pelaporan orang hilang berhasil dikirim.');
      
      // Reset form setelah submit
      document.getElementById('missing-form').reset();
    });
  }
  