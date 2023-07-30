const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Verificar si el usuario ya existe
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        // Crear una nueva instancia del modelo User
        const newUser = new User({ username, password });

        // Encriptar la contraseña antes de guardarla en la base de datos
        const saltRounds = 10;
        bcrypt.hash(newUser.password, saltRounds, async (err, hash) => {
            if (err) throw err;

            newUser.password = hash;
            await newUser.save();
            res.status(201).json({ message: 'Usuario creado exitosamente' });
        });
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Buscar el usuario en la base de datos
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        // Comparar la contraseña ingresada con la almacenada en la base de datos
        bcrypt.compare(password, user.password, (err, result) => {
            if (err) throw err;

            if (result) {
                // Contraseña válida, generar el token de autenticación
                const token = jwt.sign({ userId: user._id }, 'secreto', { expiresIn: '1h' });

                // Actualizar la hora de inicio de sesión
                user.lastLogin = Date.now();
                user.save();

                return res.json({ token });
            } else {
                return res.status(401).json({ message: 'Contraseña incorrecta' });
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

module.exports = { registerUser, loginUser };