import express from "express";
import http from "http";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.status(200).json({ page: 'Homepage , cors fixed' });
});

app.get('/about', (req, res) => {
    res.status(200).json({ page: 'About ErmalAbiti' });
});

app.get('/newcommit', (req, res) => {
    res.status(200).json({ page: 'NewCommit' });
});

app.get('*', (req, res) => {
    res.status(404).json({ page: 'Not Found'});
});

const server = http.createServer(app);

const PORT = process.env.PORT || 5050;


server.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});