import { homeController, joinController, loginController, confirmController } from '../controllers/globalController';

import express from 'express';

const globalRouter = express.Router();

globalRouter.get('/', homeController);
globalRouter.get('/join', joinController);
globalRouter.get('/login', loginController);
globalRouter.get('/confirm-account', confirmController);

export default globalRouter;
