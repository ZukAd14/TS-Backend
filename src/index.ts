import express, { Request, Response } from 'express';
import booksRoutes from './routes/books.routes';
import cors from 'cors';

const app = express();
app.use(cors());


app.use('/', booksRoutes);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/', (req: Request, res: Response) => {
  res.send('Books API');
})


app.use((req, res) => {
  res.status(404).json({ message: '404 not found...' });
})
const server = app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});