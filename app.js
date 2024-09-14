const express = require('express');
const app = express();
const port = 3000;

// Rota raiz
app.get('/', (req, res) => {
  res.status(200).json("ola mundo")
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
