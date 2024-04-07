const uniqueId = require("uniqid");
const BLOG = require("../Models/Blog");
const Author = require("../Models/Author");

async function handleGetAllBlogs(req, res) {
  const allBlogs = await BLOG.find({});
  return res.json(allBlogs);
}

async function handleCreateNewBlog(req, res) {
  const body = req.body;
  if (!req.body) return res.status(400).json({ error: "Missing blog data!" });
  const { title, category, description } = req.body;
  const userEmail = req.body.user;
  const image = req.file;
  if (!title || !category || !description || !req.file) {
    console.log("Title:", title);
    console.log("Category:", category);
    console.log("Description:", description);
    if (image) {
      console.log("Image filename:", image.filename);
      console.log("Image path:", image.path);
    } else {
      console.log("No image uploaded");
    }
    return res.status(400).json({ error: "Missing required data!" });
  }

  try {
    // let author = await Author.findOne({ authorEmail: userEmail });
    // if (!author) return res.status(400).json({ error: "User not found." });

    //Create new blog post
    const newBlog = await BLOG.create({
      blogId: uniqueId(),
      title,
      category,
      description: description,
      author: userEmail,
      image: {
        data: req.file.buffer, // Assuming Multer adds buffer field to the file object
        contentType: req.file.mimetype, // Assuming Multer adds mimetype field to the file object
      },
    });

    await newBlog.save();
    res.status(201).json({ message: "Blog post created successfully." });
  } catch (err) {
    console.error("Error creating new blog:", err);
    res.status(500).json({ error: "Internal server error." });
  }
}

module.exports = {
  handleCreateNewBlog,
  handleGetAllBlogs,
};
