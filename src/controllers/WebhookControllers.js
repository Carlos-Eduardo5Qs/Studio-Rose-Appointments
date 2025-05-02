/* eslint-disable no-undef */
import dotenv from 'dotenv';
dotenv.config();

import logger from '../services/logger.js';

class AppController {
  constructor() {
    this.VERIFY_TOKEN = process.env.VERIFY_TOKEN;

    this.webhookGet = this.webhookGet.bind(this);
    this.webhookPost = this.webhookPost.bind(this);
  }

  webhookGet(req, res) {
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode && token) {
      if (mode === 'subscribe' && token === this.VERIFY_TOKEN) {
        logger.debug('[WEBHOOK] Verification successfull!');
        res.status(200).send(challenge);
      } else {
        logger.debug('[Webhook] Verification failed.');
        res.sendStatus(403);
      }
    } else {
      logger.debug('[WEBHOOK] Missing parameters.');
      res.sendStatus(400);
    }
  }

  webhookPost(req, res) {
    const data = req.body;
    logger.debug('[WEBHOOK] Data received:\n' + JSON.stringify(data, null, 2));
    res.sendStatus(200);
  }
}

export const appController = new AppController();
