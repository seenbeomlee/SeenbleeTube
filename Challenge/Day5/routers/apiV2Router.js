import { removeController, editController, apiV2Controller } from '../controllers/apiController';

import express from 'express';

const apiV2Router = express.Router();

apiV2Router.get('/', apiV2Controller);
apiV2Router.get('/remove', removeController);
apiV2Router.get('/edit', editController);

export default apiV2Router;
