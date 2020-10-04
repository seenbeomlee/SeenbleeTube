import express from 'express';
import passport from 'passport';
import routes from '../routes';
import { homeController, searchController } from '../controllers/videoController';
import {
  getJoinController,
  postJoinController,
  getLoginController,
  postLoginController,
  logoutController,
  githubLogin,
  postGithubLogIn,
  getMe,
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

globalRouter.get(routes.gitHub, githubLogin);

globalRouter.get(
  routes.githubCallback,
  passport.authenticate('github', { failureRedirect: '/login' }),
  postGithubLogIn
);

globalRouter.get(routes.me, getMe);

export default globalRouter;
