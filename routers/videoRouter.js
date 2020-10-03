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

import { uploadVideo, onlyPrivate } from '../middlewares';

const videoRouter = express.Router();

/* Upload */
videoRouter.get(routes.upload, onlyPrivate, getUploadController);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUploadController);

/* Video Detail */
videoRouter.get(routes.videoDetail(), videoDetailController);

/* Edit Video */
videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideoController);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideoController);

/* Delete Video */
videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideoController);

export default videoRouter;
