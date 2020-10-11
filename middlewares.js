import multer from 'multer';
import multerS3 from 'multer-s3';
import aws from 'aws-sdk';
import routes from './routes';

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_PRIVATE_ACCESS_KEY,
});

const multerVideo = multer({
  storage: multerS3({
    s3,
    acl: 'public-read',
    bucket: 'seenbleetube/video',
  }),
});
const multerAvatar = multer({
  storage: multerS3({
    s3,
    acl: 'public-read',
    bucket: 'seenbleetube/avatar',
  }),
});

/* only 1 file is allowed */
export const uploadVideo = multerVideo.single('videoFile');
export const uploadAvatar = multerAvatar.single('avatar');

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = 'Seenblee Tube';
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
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
