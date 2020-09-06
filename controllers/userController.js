/* globalRoutes */
export const joinController = (req, res) => res.render('join');
export const loginController = (req, res) => res.render('login');
export const logoutController = (req, res) => res.render('logout');

/* userRoutes */
export const usersController = (req, res) => res.render('users');
export const userDetailController = (req, res) => res.render('userDetail');
export const editProfileController = (req, res) => res.render('editProfile');
export const changePasswordController = (req, res) =>
  res.render('changePassword');
