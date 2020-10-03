import routes from '../routes';
import User from '../models/User';

/* globalRoutes */
export const getJoinController = (req, res) => {
  res.render('join', { pageTitle: 'Get Join' });
};

export const postJoinController = async (req, res) => {
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
    } catch (error) {
      console.log(error);
    }
    // To Do: Log user in
    res.redirect(routes.home);
  }
  res.render('join', { pageTitle: 'Join' });
};

export const getLoginController = (req, res) => res.render('login', { pageTitle: 'Login' });
export const postLoginController = (req, res) => {
  res.redirect(routes.home);
};

export const logoutController = (req, res) => {
  //To Do: Process Logout
  res.redirect(routes.home);
};

/* userRoutes */
export const userDetailController = (req, res) =>
  res.render('userDetail', { pageTitle: 'User Detail' });
export const editProfileController = (req, res) =>
  res.render('editProfile', { pageTitle: 'Edit Profile' });
export const changePasswordController = (req, res) =>
  res.render('changePassword', { pageTitle: 'Change Password' });
