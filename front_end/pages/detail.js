export default async function loadDetail(id) {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `<p>Loading data...</p>`;
  
    const apiURL = `https://api.example.com/missing-persons/${id}`; // Ganti dengan API Anda
  
    try {
      const response = await fetch(apiURL);
      const person = await response.json();
  
      mainContent.innerHTML = `
        <section class="detail">
          <div class="image">
            <img src="${person.photo}" alt="${person.name}">
          </div>
          <div class="info">
            <h2>Nama: ${person.name}</h2>
            <p>Tanggal Hilang: ${person.missing_date}</p>
            <p>Ciri-ciri: ${person.description}</p>
            <p>Hubungi Nomor: ${person.contact}</p>
            <button class="status-btn">${person.status}</button>
          </div>
        </section>
      `;
    } catch (error) {
      console.error('Error fetching detail:', error);
      mainContent.innerHTML = '<p>Error loading detail. Please try again later.</p>';
    }
  }
  