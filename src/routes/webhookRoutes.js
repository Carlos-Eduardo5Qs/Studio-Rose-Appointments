import express from 'express';
import { appController } from '../controllers/WebhookControllers.js';

const router = express.Router();

router.get('/whatsapp/webhook', appController.webhookGet);
router.post('/whatsapp/webhook', appController.webhookPost.bind(appController));

export const Router = router;
