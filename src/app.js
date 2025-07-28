const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();

const playerRoutes = require('./routes/playerRoutes');
const matchRoutes = require('./routes/matchRoutes');

// Middleware para JSON
app.use(express.json());

app.use('/players', playerRoutes);
app.use('/matches', matchRoutes);

// Swagger config
const swaggerDocs = require('./swaggerConfig');
swaggerDocs(app);

// Rotas
app.get('/', (req, res) => {
  res.send('🎮 Multiplayer Match API is live!');
});

module.exports = app;
