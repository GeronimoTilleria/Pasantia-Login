// require('dotenv');
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const requireLogin = require('./middleware/requireLogin');

const app = express();

// Configurar la base de datos
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Rutas de autenticación
app.use('/api', authRoutes);

module.exports = app;