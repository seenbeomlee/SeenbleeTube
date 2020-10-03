import multer from 'multer';
import routes from './routes';

const multerVideo = multer({ dest: 'uploads/videos/' });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = 'Seenblee Tube';
  res.locals.routes = routes;
  res.locals.user = req.user || null;
  /* To check which user sends the requests */
  console.log(req.user);
  next();
};

/* for logged in user */
export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};

/* only 1 file is allowed */
export const uploadVideo = multerVideo.single('videoFile');
