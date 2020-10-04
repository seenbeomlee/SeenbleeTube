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

export const githubLogin = passport.authenticate('github');

//export const githubLoginCallback = async (accessToken, refreshToken, profile, cb) => {
export const githubLoginCallback = async (_, __, profile, cb) => {
  /* github Log */
  //console.log(accessToken, refreshToken, profile, cb);
  const {
    _json: { id, avatarUrl, name, email },
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.githubId = id;
      user.save();
      return cb(null, user);
    } else {
      const newUser = await User.create({
        email,
        name,
        githubId: id,
        avatarUrl: avatarUrl,
      });
      return cb(null, newUser);
    }
  } catch (error) {
    return cb(error);
  }
};

export const postGithubLogIn = (req, res, next) => {
  res.redirect(routes.home);
};

export const facebookLogin = passport.authenticate('facebook');

export const facebookLoginCallback = (accessToken, refreshToken, profile, cb) => {
  console.log(accessToken, refreshToken, profile, cb);
};

export const postFacebookLogIn = (req, res) => {
  res.redirect(routes.home);
};

export const logoutController = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};

export const getMe = (req, res) => {
  res.render('userDetail', { pageTitle: 'User Detail', user: req.user });
};

/* userRoutes */
export const userDetailController = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const user = await User.findById(id).populate('videos');
    res.render('userDetail', { pageTitle: 'User Detail', user });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const getEditProfileController = (req, res) =>
  res.render('editProfile', { pageTitle: 'Edit Profile' });

export const postEditProfileController = async (req, res) => {
  const {
    body: { name, email },
    file,
  } = req;
  try {
    await User.findByIdAndUpdate(req.user.id, {
      name,
      email,
      avatarUrl: file ? file.path : req.user.avatarUrl,
    });
    res.redirect(routes.me);
  } catch (error) {
    res.redirect(routes.editProfile);
  }
};

export const getChangePasswordController = (req, res) =>
  res.render('changePassword', { pageTitle: 'Change Password' });

export const postChangePasswordController = async (req, res) => {
  const {
    body: { oldPassword, newPassword, newPassword1 },
  } = req;
  try {
    if (newPassword !== newPassword1) {
      res.status(400);
      res.redirect(`/users/${routes.changePassword}`);
      return;
    } else {
      await req.user.changePassword(oldPassword, newPassword);
      res.redirect(routes.me);
    }
  } catch (error) {
    res.status(400);
    res.redirect(`/users/${routes.changePassword}`);
  }
};
