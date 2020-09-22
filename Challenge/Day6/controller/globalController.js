/* globalRoutes */
export const homeController = (req, res) => res.render('Home', { pageTitle: 'Home' });
export const loginController = (req, res) => res.render('Login', { pageTitle: 'Login' });
export const photosController = (req, res) => res.render('Photos', { pageTitle: 'Photos' });
export const profileController = (req, res) => res.render('Profile', { pageTitle: 'Profile' });
