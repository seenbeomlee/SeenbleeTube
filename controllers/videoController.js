import { videos } from '../db';

/* globalRoutes */
export const homeController = (req, res) => {
  res.render('home', { pageTitle: 'Home', videos });
};
export const searchController = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  res.render('search', { pageTitle: 'Search', searchingBy });
};

/* videoRoutes */
export const uploadController = (req, res) => {
  res.render('upload', { pageTitle: 'Upload' });
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
