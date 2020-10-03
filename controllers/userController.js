import routes from '../routes';
import User from '../models/User';
import passport from 'passport';

/* globalRoutes */
export const getJoinController = (req, res) => {
  res.render('join', { pageTitle: 'Get Join' });
};

export const postJoinController = async (req, res, next) => {
  const {
    body: { name, email, password, password2 },
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render('join', { pageTitle: 'Join' });
  } else {
    try {
      const user = await User({
        name,
        email,
      });
      await User.register(user, password);
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
  }
};

export const getLoginController = (req, res) => res.render('login', { pageTitle: 'Login' });
export const postLoginController = passport.authenticate('local', {
  failureRedirect: routes.login,
  successRedirect: routes.home,
});

export const githubLoginCallback = (accessToken, refreshToken, profile, cb) => {
  console.log(accessToken, refreshToken, profile, cb);
};

export const logoutController = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};

/* userRoutes */
export const userDetailController = (req, res) =>
  res.render('userDetail', { pageTitle: 'User Detail' });
export const editProfileController = (req, res) =>
  res.render('editProfile', { pageTitle: 'Edit Profile' });
export const changePasswordController = (req, res) =>
  res.render('changePassword', { pageTitle: 'Change Password' });
