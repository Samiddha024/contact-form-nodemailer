// server.js
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './database/database.js'; // <-- use existing logic
import contactRoutes from './routes/email.routes.js';
import cors from 'cors';
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  credentials: true
}));

// Routes
app.use('/api', contactRoutes);

// Connect DB
connectDB(); // <-- correct way!

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
