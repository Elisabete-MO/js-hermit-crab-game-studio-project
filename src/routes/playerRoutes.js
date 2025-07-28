const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');

/**
 * @swagger
 * /players:
 *   post:
 *     summary: Cria um novo jogador
 *     tags: [Players]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - nickname
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *                 example: João Silva
 *               nickname:
 *                 type: string
 *                 example: joaosilva
 *               email:
 *                 type: string
 *                 format: email
 *                 example: joao@email.com
 *     responses:
 *       201:
 *         description: Jogador criado com sucesso
 *       400:
 *         description: Dados inválidos
 *
 *   get:
 *     summary: Lista todos os jogadores
 *     tags: [Players]
 *     responses:
 *       200:
 *         description: Lista de jogadores retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   nickname:
 *                     type: string
 *                   email:
 *                     type: string
 *
 * /players/{id}:
 *   get:
 *     summary: Busca jogador pelo ID
 *     tags: [Players]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do jogador
 *     responses:
 *       200:
 *         description: Jogador encontrado
 *       404:
 *         description: Jogador não encontrado
 *
 *   put:
 *     summary: Atualiza um jogador pelo ID
 *     tags: [Players]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do jogador
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Maria Oliveira
 *               nickname:
 *                 type: string
 *                 example: maria_oliveira
 *               email:
 *                 type: string
 *                 format: email
 *                 example: maria@email.com
 *     responses:
 *       200:
 *         description: Jogador atualizado
 *       404:
 *         description: Jogador não encontrado
 *
 *   delete:
 *     summary: Remove um jogador pelo ID
 *     tags: [Players]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do jogador
 *     responses:
 *       204:
 *         description: Jogador removido com sucesso
 *       404:
 *         description: Jogador não encontrado
 */
router.post('/', playerController.createPlayer);
router.get('/', playerController.getAllPlayers);
router.get('/:id', playerController.getPlayerById);
router.put('/:id', playerController.putPlayer);
router.delete('/:id', playerController.deletePlayer);

module.exports = router;
