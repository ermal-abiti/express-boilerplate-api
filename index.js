import express from "express";
import http from "http";

const app = express();

app.use(express.json());


app.get('/', (req, res) => {
    res.status(200).json({ page: 'Homepage' });
});

app.get('/about', (req, res) => {
    res.status(200).json({ page: 'About' });
});

app.get('*', (req, res) => {
    res.status(404).json({ page: 'Not Found'});
});

const server = http.createServer(app);

const PORT = process.env.PORT || 5000;


server.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});