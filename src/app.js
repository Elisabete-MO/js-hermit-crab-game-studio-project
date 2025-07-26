// src/app.js
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();

// Middleware para JSON
app.use(express.json());

// Swagger config
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Multiplayer Match API',
      version: '1.0.0',
      description: 'API to manage multiplayer matches',
    },
  },
  apis: ['./src/routes/*.js'], // você colocará as anotações nas rotas depois
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rotas
app.get('/', (req, res) => {
  res.send('🎮 Multiplayer Match API is live!');
});

module.exports = app;
