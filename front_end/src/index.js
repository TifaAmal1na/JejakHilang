// Mengimpor file CSS
import '../assets/style.css';  // Sesuaikan path relatif menuju folder assets


// Menambahkan kode JavaScript untuk interaktivitas (jika diperlukan)
document.addEventListener('DOMContentLoaded', () => {
  const homeLink = document.getElementById('home-link');
  const detailLink = document.getElementById('detail-link');
  const formLink = document.getElementById('form-link');
  const mainContent = document.getElementById('main-content');

  homeLink.addEventListener('click', () => {
    mainContent.innerHTML = '<h2>Home Page</h2><p>Welcome to the Home Page!</p>';
  });

  detailLink.addEventListener('click', () => {
    mainContent.innerHTML = '<h2>Detail Page</h2><p>Here are the details.</p>';
  });

  formLink.addEventListener('click', () => {
    mainContent.innerHTML = '<h2>Form Page</h2><p>Fill out the form below.</p>';
  });
});
