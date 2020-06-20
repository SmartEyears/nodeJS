export const home = (req, res) => res.render("home", { pageTitle: "Home" }); //첫번째 인자는 템플릿, 두번째인자는 정보가 담긴 객체
export const search = (req, res) =>
  res.render("search", { pageTitle: "Search" });
export const videos = (req, res) =>
  res.render("videos", { pageTitle: "Video" });
export const upload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Vidoe Detail" });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
