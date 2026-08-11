const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('SELAMAT DATANG DI GLOWLIST ');
});

app.listen(PORT, () => {
    console.log(`Server GlowList jalan di http://localhost:${PORT}`);
});