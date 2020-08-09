/* globalRoutes */
export const homeController = (req, res) => res.render("Home");
export const searchController = (req, res) => res.send("Search");

/* videoRoutes */
export const videosController = (req, res) => res.send('videos');
export const uploadController = (req, res) => res.send('upload');
export const videoDetailController = (req, res) => res.send('videoDetail');
export const editVideoController = (req, res) => res.send('editVideo');
export const deleteVideoController = (req, res) => res.send('deleteVideo');