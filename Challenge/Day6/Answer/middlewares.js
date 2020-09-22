export const localMiddlewares = (req, res, next) => {
  res.locals.siteTitle = 'Sexy Site';
  next();
};
