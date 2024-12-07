export default function loadForm() {
  const mainContent = document.getElementById('main-content');
  mainContent.innerHTML = `
    <section class="form-section">
      <h2>Form Pelaporan Orang Hilang</h2>
      <form id="missing-form" enctype="multipart/form-data">
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
          <label for="ciri">Ciri-ciri</label>
          <textarea id="ciri" name="ciri" required></textarea>
        </div>
        <div class="form-group">
          <label for="nomer_pelapor">Nomor Pelapor</label>
          <input type="text" id="nomer_pelapor" name="nomer_pelapor" required>
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

  // Periksa apakah file foto dipilih
  const fotoInput = document.getElementById('foto');
  if (!fotoInput.files.length) {
    alert('Foto diperlukan!');
    return;  // Hentikan pengiriman form jika tidak ada file yang dipilih
  }

  const formData = new FormData();
  formData.append('nama', document.getElementById('nama').value);
  formData.append('foto', fotoInput.files[0]); // Pastikan file dipilih
  formData.append('tanggal_hilang', document.getElementById('tanggal_hilang').value);
  formData.append('ciri', document.getElementById('ciri').value);
  formData.append('nomer_pelapor', document.getElementById('nomer_pelapor').value);

  // Kirim data ke server
  fetch('http://localhost:3000/api/pelaporan/add', {
    method: 'POST',
    body: formData, // FormData secara otomatis menyertakan header yang benar
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      alert('Pelaporan berhasil dikirim.');
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('Terjadi kesalahan saat mengirim data.');
    });  
});
}