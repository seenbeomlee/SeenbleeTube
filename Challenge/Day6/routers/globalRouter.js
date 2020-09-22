import express from 'express';
import {
  homeController,
  loginController,
  photosController,
  profileController,
} from '../controller/globalController';

const globalRouter = express.Router();

/* globalRouter */
globalRouter.get('/', homeController);
globalRouter.get('/login', loginController);
globalRouter.get('/photos', photosController);
globalRouter.get('/profile', profileController);

export default globalRouter;
