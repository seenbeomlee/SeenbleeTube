import express from 'express';
import routes from '../routes';
import {
  getUploadController,
  postUploadController,
  videoDetailController,
  getEditVideoController,
  deleteVideoController,
  postEditVideoController,
} from '../controllers/videoController';

import { uploadVideo } from '../middlewares';

const videoRouter = express.Router();

/* Upload */
videoRouter.get(routes.upload, getUploadController);
videoRouter.post(routes.upload, uploadVideo, postUploadController);

/* Video Detail */
videoRouter.get(routes.videoDetail(), videoDetailController);

/* Edit Video */
videoRouter.get(routes.editVideo(), getEditVideoController);
videoRouter.post(routes.editVideo(), postEditVideoController);

/* Delete Video */
videoRouter.get(routes.deleteVideo(), deleteVideoController);

export default videoRouter;
