# JejakHilang

Website JejakHilang adalah aplikasi berbasis web yang menggunakan **Node.js (Express.js)**, **MySQL**, dan **JavaScript**. Proyek ini terdiri dari dua bagian utama: front-end dan back-end.

## Tools yang Dibutuhkan

Pastikan Anda sudah menginstal **Node.js**, **MySQL**, dan **npm** (Node Package Manager) di Laptop Anda.

## Cara Menjalankan Proyek

Untuk menjalankan proyek ini, ikuti langkah-langkah berikut:

1. **Mengimpor Database ke MySQL**:  
   Sebelum menjalankan back-end, pastikan Anda sudah membuat database bernama `jejakhilang` dan mengimpor file SQL yang diperlukan yang terdapat pada folder `back_end`.

2. **Menjalankan Front End**:  
   1. Masuk ke folder `front_end`:
      ```bash
      cd front_end
      ```
   2. Instal semua dependensi dengan perintah:
      ```bash
      npm install
      ```
   3. Jalankan server development untuk front-end dengan perintah:
      ```bash
      npm run start-dev
      ```
   4. Untuk membangun versi produksi dari front-end, jalankan perintah:
      ```bash
      npm run build
      ```

3. **Menjalankan Back End**:  
   1. Masuk ke folder `back_end`:
      ```bash
      cd back_end
      ```
   2. Instal semua dependensi dengan perintah:
      ```bash
      npm install
      ```
   3. Jalankan server back-end dengan perintah:
      ```bash
      npm run start
      ```

## Postman API Collection & Environment
Untuk memudahkan pengujian API, kami menyediakan **Postman API Collection** dan **Postman Environment** yang dapat ditemukan di folder `back_end`.

### Cara Menggunakan Postman Environment:
1. Di Postman, pilih **Manage Environments** (ikon roda gigi di sudut kanan atas).
2. Pilih **Import** dan pilih file `JejakHilang API Documentation.postman_environment.json` dari folder `back_end`.
3. Pilih environment yang telah diimpor dari dropdown environment saat melakukan pengujian API.

### Cara Menggunakan Postman API Collection:
1. Buka aplikasi Postman.
2. Pilih **Import** di Postman.
3. Pilih **Upload Files** dan pilih file `JejakHilang.postman_collection.json` dari folder `back_end`.
4. Setelah koleksi berhasil diimpor, Anda dapat mulai menguji API yang ada.

## Catatan Penting

- Pastikan Anda sudah mengatur konfigurasi database MySQL dengan benar, terutama di bagian file konfigurasi yang digunakan untuk koneksi ke database pada `back_end/db.js`.
- Pastikan xampp sudah berjalan sebelum memulai server back-end.
- Terminal harus dijalankan keduanya secara bersamaan dari sisi front-end dan back-end
