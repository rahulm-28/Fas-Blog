const express = require("express");
const multer = require("multer");
const {
  handleCreateNewBlog,
  handleGetAllBlogs,
  handleDeleteBlog,
} = require("../Controllers/BlogController");

const router = express.Router();

let Storage = multer.diskStorage({
  destination: "Assets/Images",
  // filename: function (req, file, cb) {
  //   cb(null, Date.now() + path.extname(file.originalname));
  // },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

let upload = multer({
  storage: Storage,
});

router.get("/getAll", handleGetAllBlogs);

router.post("/createPost", upload.single("image"), handleCreateNewBlog);

router.delete("/deletePost/:id", handleDeleteBlog);

module.exports = router;
