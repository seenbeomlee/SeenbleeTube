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

export const postUploadController = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description,
  });
  res.redirect(routes.videoDetail(newVideo.id));
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
