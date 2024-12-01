// Mengimpor file CSS
import '../assets/style.css';  // Sesuaikan path relatif menuju folder assets

// Mengimpor modul yang diperlukan
import loadHome from '../pages/home.js';
import loadDetail from '../pages/detail.js';

// Menambahkan kode JavaScript untuk interaktivitas (jika diperlukan)
document.addEventListener('DOMContentLoaded', () => {
  const homeLink = document.getElementById('home-link');
  const detailLink = document.getElementById('detail-link');
  const formLink = document.getElementById('form-link');
  const mainContent = document.getElementById('main-content');

  homeLink.addEventListener('click', () => {
    loadHome(); // Memanggil fungsi dari home.js
  });

  detailLink.addEventListener('click', () => {
    const personId = prompt('Enter person ID'); // Bisa diganti dengan ID yang lebih dinamis
    loadDetail(personId); // Memanggil fungsi dari detail.js
  });

  formLink.addEventListener('click', () => {
    mainContent.innerHTML = '<h2>Form Page</h2><p>Fill out the form below.</p>';
  });
});
