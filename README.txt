Farm Layout & Item Modifier by Maru - project build EXE (Windows) dan APK (Android)

CARA PALING MUDAH (otomatis, tanpa install apa pun):
1. Buat akun GitHub (gratis), buat repository baru.
2. Upload semua isi folder ini (termasuk folder .github dan www) ke repository itu.
3. Buka tab Actions > "Build EXE dan APK" > tunggu selesai (sekitar 5-10 menit).
   Jika tidak jalan sendiri, klik "Run workflow".
4. Buka hasil run itu, bagian Artifacts di bawah:
   - Farm-Layout-Item-Modifier-exe : file .exe portable (tinggal klik dua kali)
   - Farm-Layout-Item-Modifier-apk : file app-debug.apk untuk Android
5. APK: izinkan "install dari sumber tidak dikenal" di HP, lalu install.

CARA MANUAL DI KOMPUTER SENDIRI:
- Windows EXE: install Node.js, lalu di folder ini jalankan
    npm install
    npx electron-builder --win portable
  hasilnya di folder dist.
- Android APK: butuh Node.js, JDK 17 dan Android SDK, lalu
    npm install
    npx cap add android
    npx cap sync android
    cd android && gradlew assembleDebug

Edit tampilan/fitur di www/index.html.

CATATAN ANDROID: tombol "Create File" di APK membuka menu Bagikan (Share) berisi teks kode, pilih Simpan/Catatan/Drive. Tombol Copy Codes tetap menyalin ke clipboard.

FORMAT KODE (v1.1): tiap petak bibit menghasilkan 3 baris, contoh Turnip:
80071DFC 0022
80071DFE 0169
80071E00 0002
Bibit panen ulang (Cucumber, Strawberry, Tomato, Corn, Pineapple, Eggplant, Sweet Potato, Green Pepper) berakhiran 0003; bibit lain 0002; Rumput = 0036 / 0167 / 0302.


v1.3: dua pilihan terpisah. Penyiraman: Sudah disiram (0169) / Belum disiram (0168). Pertumbuhan: Dalam pertumbuhan / Sudah tumbuh (siap panen). Nilai +4: panen sekali 0001 / 0002; panen ulang 0002 / 0003.

v1.4: kotak kode otomatis berubah (live) tiap ada perubahan; mengganti mode Penyiraman/Pertumbuhan langsung mengubah semua bibit di range terpilih (default semua area).

v1.5: panel Penyiraman, Pertumbuhan, dan Contoh bentuk petak disembunyikan di tab Item Modifier (hanya tampil di tab Kebun).


v2.0: tampilan dirombak total (ramah PC & HP): panel samping di PC, tab bawah di HP, palet bibit berbentuk kartu + pencarian, alat Kuas/Kotak/Range/Hapus/Geser, zoom peta, undo/redo (Ctrl+Z / Ctrl+Y), pratinjau seleksi, mode gelap manual, notifikasi (toast). Logika kode GameShark TIDAK diubah (hasil kode identik dengan v1.5).
