export default async function loadHome() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
      <section class="hero">
        <h1>Layanan Pencarian Orang Hilang</h1>
        <p>Kami memahami sakit hati terkait dengan orang-orang tercinta yang telah lama hilang. Libatkan kami untuk membantu menemukan keluarga dan orang-orang yang telah lama hilang dari hidup Anda.</p>
      </section>
  
      <section class="missing-list">
        <h2>Daftar Orang Hilang</h2>
        <div id="missing-list-container" class="list">
          <!-- Data akan dimuat di sini -->
        </div>
      </section>
    `;
  
    const apiURL = 'https://api.example.com/missing-persons'; // Ganti dengan API Anda
  
    try {
      const response = await fetch(apiURL);
      const data = await response.json();
      const container = document.getElementById('missing-list-container');
  
      data.forEach(person => {
        const personCard = document.createElement('div');
        personCard.classList.add('person');
        personCard.innerHTML = `
          <img src="${person.photo}" alt="${person.name}">
          <p>${person.name}</p>
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
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  