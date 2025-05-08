const express = require('express');
const path = require('path'); // ⬅️ 加這一行！

const app = express();
const port = 3000;

// 靜態資料夾
app.use(express.static('public'));

// 讓首頁直接開啟破格式設計.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '破格式設計.html'));
});

app.listen(port, '0.0.0.0', () => {
    console.log(`🚀 Server is running at http://localhost:${port}`);
});

