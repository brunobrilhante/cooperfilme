import { Router } from 'express';
import { authenticateToken } from '../../config/jwt.js';
import { enviarRoteiro, consultarStatus, listarRoteiros, alterarStatus, buscarRoteiro } from '../controllers/roteiroController.js';
export const router = Router();

// Rotas públicas
router.post('/enviar', enviarRoteiro);
router.get('/:id/status', consultarStatus);

// Rotas protegidas
router.get('/', listarRoteiros);
router.get('/:id', buscarRoteiro);
router.put('/:id/status', authenticateToken, alterarStatus);