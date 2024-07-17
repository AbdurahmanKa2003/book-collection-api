import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bookRoutes from './routes/bookRoutes.js';  
import userRoutes from './routes/userRoutes.js';  

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', bookRoutes);
app.use('/api', userRoutes);

mongoose.connect('mongodb://localhost:27017/bookcollection', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(error => console.log(error));

export default app;
