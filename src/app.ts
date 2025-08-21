import express from 'express';
import bookRoutes from './routes/bookRoute';

const app = express();

app.use(express.json()); 

app.use('/api', bookRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});