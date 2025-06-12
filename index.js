const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.get('/saludo/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send(`¡Hola, ${nombre}!`);
});

/* istanbul ignore next */
if (require.main === module) {
  // Solo se ejecuta si lo ejecutás directamente con node index.js
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
  });
}

module.exports = app; // Exportamos la app para los tests
