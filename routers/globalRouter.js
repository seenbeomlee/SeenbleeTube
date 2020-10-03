import express from 'express';
import routes from '../routes';
import { homeController, searchController } from '../controllers/videoController';
import {
  getJoinController,
  postJoinController,
  getLoginController,
  postLoginController,
  logoutController,
} from '../controllers/userController';
import { onlyPublic, onlyPrivate } from '../middlewares';

const globalRouter = express.Router();
/* */
globalRouter.get(routes.join, onlyPublic, getJoinController);
globalRouter.post(routes.join, onlyPublic, postJoinController, postLoginController);

globalRouter.get(routes.login, onlyPublic, getLoginController);
globalRouter.post(routes.login, onlyPublic, postLoginController);

/* videoController */
globalRouter.get(routes.home, homeController);
globalRouter.get(routes.search, searchController);

/* userController */
globalRouter.get(routes.logout, onlyPrivate, logoutController);

export default globalRouter;
