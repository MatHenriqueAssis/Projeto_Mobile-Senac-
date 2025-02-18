const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Servir arquivos estáticos da pasta 'static'
app.use(express.static(path.join(__dirname, 'static')));

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});