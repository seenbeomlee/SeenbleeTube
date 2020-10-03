import multer from 'multer';
import routes from './routes';

const multerVideo = multer({ dest: 'uploads/videos/' });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = 'Seenblee Tube';
  res.locals.routes = routes;
  res.locals.user = req.user || {};
  next();
};

/* only 1 file is allowed */
export const uploadVideo = multerVideo.single('videoFile');
