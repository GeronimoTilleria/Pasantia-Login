require('dotenv').config();
const app = require('./app');

const PORT = process.env.PUERTO;

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});