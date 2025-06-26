import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import itineraryRoutes from './routes/itinerary.js';
import dropdownsRoutes from './routes/dropdowns.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/generate-itinerary', itineraryRoutes);
app.use('/dropdowns', dropdownsRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Kicko Trips backend running on port ${PORT}`);
}); 