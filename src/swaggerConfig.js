const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hermit Crab Game Studio API',
      version: '1.0.0',
      description: 'API para gerenciamento de jogadores e partidas multiplayer',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor Local',
      },
    ],
  },
  apis: [__dirname + '/routes/*.js'], // Pega as anotações dos arquivos de rotas
};

const swaggerSpec = swaggerJsDoc(options);

function swaggerDocs(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log(`📄 Swagger Docs disponível em http://localhost:3000/api-docs`);
}

module.exports = swaggerDocs;
