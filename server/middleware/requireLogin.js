const jwt = require('jsonwebtoken');

const requireLogin = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Acceso no autorizado' });
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token no válido' });
        } else {
            req.user = decoded.userId;
            next();
        }
    });
};

module.exports = requireLogin;