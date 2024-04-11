const uniqueId = require("uniqid");
const path = require("path");
const BLOG = require("../Models/Blog");
const Author = require("../Models/Author");

async function handleGetAllBlogs(req, res) {
  const allBlogs = await BLOG.find({});
  return res.json(allBlogs);
}

async function handleCreateNewBlog(req, res) {
  const body = req.body;
  if (!req.body) return res.status(400).json({ error: "Missing blog data!" });
  const { title, category, content } = req.body;
  const user = req.body.user;
  const image = req.file;
  if (!title || !category || !content || !req.file) {
    console.log("Title:", title);
    console.log("Category:", category);
    console.log("Description:", content);
    if (image) {
      console.log("Image filename:", image.filename);
      console.log("Image path:", image.path);
    } else {
      console.log("No image uploaded");
    }
    return res.status(400).json({ error: "Missing required data!" });
  }

  try {
    let Foundauthor = await Author.findOne({ authorEmail: user });
    if (!Foundauthor) return res.status(400).json({ error: "User not found." });

    const { authorName, authorEmail } = Foundauthor;

    //Create new blog post
    const newBlog = await BLOG.create({
      blogId: uniqueId(),
      title,
      category,
      content: content,
      author: { authorName, authorEmail },
      image: {
        data: req.file.buffer,
        contentType: req.file.mimetype,
        path: path.join("Assets", "Images", req.file.filename),
      },
    });

    await newBlog.save();
    res.status(201).json({ message: "Blog post created successfully." });
  } catch (err) {
    console.error("Error creating new blog:", err);
    res.status(500).json({ error: "Internal server error." });
  }
}

async function handleDeleteBlog(req, res) {
  const id = req.params.id;
  await BLOG.findByIdAndDelete(id);
  return res.json({
    status: "Successfully deleted the blog.",
  });
}

module.exports = {
  handleCreateNewBlog,
  handleGetAllBlogs,
  handleDeleteBlog,
};
