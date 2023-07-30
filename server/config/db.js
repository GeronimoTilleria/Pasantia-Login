const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URL; // Reemplaza con tu URL de MongoDB

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Conexión exitosa a la base de datos');
    } catch (error) {
        console.error('Error de conexión a MongoDB:', error);
    }
};

module.exports = connectDB;