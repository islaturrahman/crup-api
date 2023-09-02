const express = require('express');
const app = express();
const mysql = require('mysql2');


// Aktifkan middleware body parsing untuk JSON
app.use(express.json());

//connect to database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_api'
});


// Cek koneksi ke database
db.connect((err) => {
    if (err) {
        console.error('Koneksi ke database gagal: ' + err.message);
    } else {
        console.log('Terhubung ke database MySQL!');
    }
});

//get data users
app.get('/api/users', async (req, res) => {
    db.query('SELECT * FROM tb_users', (err, results) => {
        if (err) {
            console.error('Kesalahan dalam pengambilan data dari database: ' + err.message);
            res.status(500).json({ error: 'Gagal mengambil data dari database' });
        } else {
            res.json(results);
        }
    });
})


//menambahkan data user
app.post('/api/users', async (req, res) => {
    const { nama, username, email, roles, password } = await req.body;

    //cek paramater
    if (!nama || !username || !email || !roles || !password) {
        return res.status(400).json({ error: 'Semua bidang harus diisi' });
    }

    const insertQuery = 'INSERT INTO tb_users (nama, username, email, roles, password) VALUES (?, ?, ?, ?, ?)';
    const values = [nama, username, email, roles, password];

    db.query(insertQuery, values, (err, results) => {
        if (err) {
            console.error('Kesalahan dalam penambahan data ke database: ' + err.message);
            return res.status(500).json({ error: 'Gagal menambahkan data ke database' });
        }
        // Data berhasil ditambahkan
        res.json({ message: 'Data berhasil ditambahkan', data: results });
    });
});



//get article
app.get('/api/article', async (req, res) => {
    db.query('SELECT * FROM tb_article', (err, results) => {
        if (err) {
            console.error('Kesalahan dalam pengambilan data dari database: ' + err.message);
            res.status(500).json({ error: 'Gagal mengambil data dari database' });
        } else {
            res.json(results);
        }
    });
})








app.listen(3001, () => {
    console.log(`Serve is Running on port 3001`);
})