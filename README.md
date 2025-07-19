# 📘 CRUD Sederhana dengan Next.js dan PostgreSQL

Aplikasi ini merupakan tugas pertemuan ke-5 Jabar Academy yang menggunakan Next.js 15 dan PostgreSQL. Aplikasi ini memungkinkan pengguna untuk melakukan operasi **Create, Read, Update, dan Delete (CRUD)** data.

---

## 🚀 Fitur

- ✅ Tambah data
- 📄 Lihat daftar
- ✏️ Edit data
- 🗑️ Hapus data

---

## 🧭 Cara Menggunakan

### 1. Halaman Utama
- Menampilkan daftar semua data.
- Terdapat tombol **Tambah**, **Edit** dan **Hapus** di setiap baris data.

### 2. Tombol Tambah
- Arahkan ke form `/add`
- Isi nama, jurusan, dan email
- Klik **Submit** untuk menyimpan data

### 3. Tombol Edit
- Arahkan ke `/edit/:id`
- Form terisi otomatis sesuai data yang dipilih
- Ubah data lalu klik **Submit**

### 4. Tombol Delete
- Menghapus data secara langsung dari database (dengan konfirmasi)

---

## ⚙️ Teknologi yang Digunakan

- [Next.js 15 (App Router)](https://nextjs.org/docs)
- [React 19](https://react.dev)
- [Postgre on Vercel](https://vercel.com/docs/postgres)
- [Tailwind CSS] (saat ini belum berfungsi optimal)
