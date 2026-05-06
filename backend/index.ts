import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import http from 'http';
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Server is running');
});

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.group('Server is running on port ' + PORT);
});
