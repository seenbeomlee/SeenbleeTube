/* globalRoutes */
export const homeController = (req, res) =>
  res.render('Home', { pageTitle: 'Home' });
export const searchController = (req, res) =>
  res.send('Search', { pageTitle: 'Search' });

/* videoRoutes */
export const videosController = (req, res) =>
  res.send('videos', { pageTitle: 'Upload' });
export const uploadController = (req, res) => res.send('upload');
export const videoDetailController = (req, res) =>
  res.send('videoDetail', { pageTitle: 'Video Detail' });
export const editVideoController = (req, res) =>
  res.send('editVideo', { pageTitle: 'Edit Video' });
export const deleteVideoController = (req, res) =>
  res.send('deleteVideo', { pageTitle: 'Delete Video' });
