import { buyController, refundController, apiV1Controller } from '../controllers/apiController';

import express from 'express';
import apiV2Router from './apiV2Router';

const apiV1Router = express.Router();

apiV2Router.get('/', apiV1Controller);
apiV1Router.get('/buy', buyController);
apiV1Router.get('/refund', refundController);

export default apiV1Router;
