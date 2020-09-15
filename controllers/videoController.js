import routes from '../routes';
import Video from '../models/Video';

/* globalRoutes */
export const homeController = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render('home', { pageTitle: 'Home', videos });
  } catch (error) {
    res.render('home', { pageTitle: 'Home', videos: [] });
  }
};

export const searchController = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  res.render('search', { pageTitle: 'Search', searchingBy, videos });
};

/* videoRoutes */
export const getUploadController = (req, res) => {
  res.render('upload', { pageTitle: 'Upload' });
};
export const postUploadController = (req, res) => {
  const {
    body: { file, title, description },
  } = req;
  // To Do: Upload and save video
  res.redirect(routes.videoDetail(324393));
};

export const videoDetailController = (req, res) => {
  res.render('videoDetail', { pageTitle: 'Video Detail' });
};
export const editVideoController = (req, res) => {
  res.render('editVideo', { pageTitle: 'Edit Video' });
};
export const deleteVideoController = (req, res) => {
  res.render('deleteVideo', { pageTitle: 'Delete Video' });
};
