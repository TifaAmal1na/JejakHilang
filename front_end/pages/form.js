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
          <label for="foto">Foto</label>
          <input type="file" id="foto" name="foto" accept="image/*" required>
        </div>
        <div class="form-group">
          <label for="tanggal_hilang">Tanggal Hilang</label>
          <input type="date" id="tanggal_hilang" name="tanggal_hilang" required>
        </div>
        <div class="form-group">
          <label for="tanggal_ditemukan">Tanggal Ditemukan (Opsional)</label>
          <input type="date" id="tanggal_ditemukan" name="tanggal_ditemukan">
        </div>
        <div class="form-group">
          <label for="ciri">Ciri-ciri</label>
          <textarea id="ciri" name="ciri" required></textarea>
        </div>
        <div class="form-group">
          <label for="nomer_pelapor">Nomor Pelapor</label>
          <input type="text" id="nomer_pelapor" name="nomer_pelapor" required>
        </div>
        <div class="form-group">
          <label for="status">Status</label>
          <select id="status" name="status" required>
            <option value="">Pilih Status</option>
            <option value="Hilang">Hilang</option>
            <option value="Ditemukan">Ditemukan</option>
          </select>
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
    const fotoFile = document.getElementById('foto').files[0]; // Ambil file gambar
    const tanggalHilang = document.getElementById('tanggal_hilang').value;
    const tanggalDitemukan = document.getElementById('tanggal_ditemukan').value;
    const ciri = document.getElementById('ciri').value;
    const nomerPelapor = document.getElementById('nomer_pelapor').value;
    const status = document.getElementById('status').value;

    // Validasi form: Pastikan semua field wajib diisi
    if (!nama || !fotoFile || !tanggalHilang || !ciri || !nomerPelapor || !status) {
      alert('Semua field wajib diisi kecuali Tanggal Ditemukan.');
      return; // Hentikan form submission jika ada field kosong
    }

    // Buat FormData untuk mengirimkan file dan data lainnya ke server
    const formData = new FormData();
    formData.append('nama', nama);
    formData.append('foto', fotoFile); // Tambahkan file gambar ke FormData
    formData.append('tanggal_hilang', tanggalHilang);
    formData.append('tanggal_ditemukan', tanggalDitemukan || null); // Kosong jika tidak diisi
    formData.append('ciri', ciri);
    formData.append('nomer_pelapor', nomerPelapor);
    formData.append('status', status);

    // Kirim data ke server menggunakan fetch
    fetch('http://localhost:3000/api/orang_hilang/add', {
      method: 'POST',
      body: formData,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Gagal mengirim data');
        }
        return response.json();
      })
      .then(data => {
        console.log('Form Submitted:', data);
        alert('Pelaporan orang hilang berhasil dikirim.');
      })
      .catch(error => {
        console.error('Error submitting form:', error);
        alert('Terjadi kesalahan saat mengirimkan pelaporan.');
      });

    // Reset form setelah submit
    document.getElementById('missing-form').reset();
  });
}
