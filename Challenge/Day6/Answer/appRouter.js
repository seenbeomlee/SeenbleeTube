import express from 'express';
import { home, login, photos, profile } from './appController';

const appRouter = express.Router();

appRouter.get('/', home);
appRouter.get('/login', login);
appRouter.get('/photos', photos);
appRouter.get('/profile', profile);

export default appRouter;
