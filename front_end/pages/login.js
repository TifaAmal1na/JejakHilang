export default function loadLogin() {
    const mainContent = document.getElementById('main-content');

    // Menampilkan form login menggunakan innerHTML
    mainContent.innerHTML = `
        <section class="login-section">
            <h2>Login</h2>
            <form id="login-form">
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" required>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required>
                </div>
                <div class="form-group">
                    <button type="submit">Login</button>
                </div>
            </form>
            <button id="close-login" class="close-btn">Close</button>
        </section>
    `;

    // Menambahkan event listener untuk tombol Close
    document.getElementById('close-login').addEventListener('click', () => {
        mainContent.innerHTML = ''; // Hapus form login jika tombol close diklik
    });

    // Menangani submit form login
    document.getElementById('login-form').addEventListener('submit', async function (event) {
        event.preventDefault(); // Mencegah form untuk mengirimkan request secara langsung

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('http://localhost:3000/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            const result = await response.json();

            if (response.ok) {
                alert(result.message); // Tampilkan pesan sukses login
                // Simpan data pengguna dalam variabel global atau session
                window.user = result.data; // Menyimpan data pengguna dalam variabel global
                window.token = result.token; // Menyimpan token dalam variabel global
                window.isLoggedIn = true; // Menandakan pengguna sudah login
                mainContent.innerHTML = ''; // Hapus form login setelah login berhasil
                window.location.href = '/home'; // Alihkan ke halaman home setelah login sukses
            } else {
                alert(result.error || 'Login failed'); // Tampilkan pesan error jika login gagal
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('An error occurred. Please try again later.');
        }
    });
}