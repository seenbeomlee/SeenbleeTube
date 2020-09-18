import { docController, apiDocController } from '../controllers/apiController';
import express from 'express';

const apiDocRouter = express.Router();

apiDocRouter.get('/', apiDocController);
apiDocRouter.get('/documentation', docController);

export default apiDocRouter;
