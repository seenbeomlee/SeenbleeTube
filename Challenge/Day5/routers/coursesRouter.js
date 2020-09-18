import { coursesController, newController, mineController } from '../controllers/coursesController';

import express from 'express';

const coursesRouter = express.Router();

coursesRouter.get('/', coursesController);
coursesRouter.get('/new', newController);
coursesRouter.get('/mine', mineController);

export default coursesRouter;
