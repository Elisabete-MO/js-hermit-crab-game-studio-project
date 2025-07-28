const express = require('express');
const router = express.Router();
const matchController = require('../controllers/matchController');

/**
* @swagger
* /matches:
*   post:
*     summary: Cria uma nova partida
*     tags: [Matches]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               name:
*                 type: string
*                 example: Partida Épica
*     responses:
*       201:
*         description: Partida criada com sucesso
*
*   get:
*     summary: Retorna todas as partidas
*     tags: [Matches]
*     responses:
*       200:
*         description: Lista de partidas
*
 * /matches/{id}:
 *   get:
 *     summary: Busca partida pelo ID
 *     tags: [Matches]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da partida
 *     responses:
 *       200:
 *         description: Partida encontrada
 *       404:
 *         description: Partida não encontrada
 *
 * /matches/{matchId}/join/{playerId}:
 *   post:
 *     summary: Jogador entra em uma partida
 *     tags: [Matches]
 *     parameters:
 *       - in: path
 *         name: matchId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da partida
 *       - in: path
 *         name: playerId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do jogador
 *     responses:
 *       200:
 *         description: Jogador entrou na partida
 *       400:
 *         description: Erro ao entrar na partida
 *
 * /matches/{id}/state:
 *   patch:
 *     summary: "Atualiza o estado de uma partida (ex: cancelar)"
 *     tags: [Matches]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da partida
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               state:
 *                 type: string
 *                 enum: [waiting, in_progress, finished, canceled]
 *                 example: canceled
 *     responses:
 *       200:
 *         description: Estado da partida atualizado
 *       400:
 *         description: Erro ao atualizar estado
 */
router.post('/', matchController.createMatch);
router.post('/matches/:matchId/join/:playerId', matchController.joinMatch);
router.patch('/:id/state', matchController.leaveMatch);
router.get('/', matchController.getAllMatches);
router.get('/:id', matchController.getMatchById);

module.exports = router;