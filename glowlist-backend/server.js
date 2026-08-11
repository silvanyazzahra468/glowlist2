const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Koneksi database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'glowlist_db'
});

db.connect(err => {
    if (err) {
        console.error('Gagal konek ke database:', err);
    } else {
        console.log('Berhasil konek ke database GlowList');
    }
});

// Route produk
app.get('/produk', (req, res) => {
    const sql = 'SELECT * FROM produk';

    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }

        res.json(result);
    });
});

// Route kategori
app.get('/kategori', (req, res) => {
    const sql = 'SELECT * FROM kategori';

    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }

        res.json(result);
    });
});

// Route utama
app.get('/', (req, res) => {
    res.send('SELAMAT DATANG DI GLOWLIST');
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server GlowList jalan di http://localhost:${PORT}`);
});