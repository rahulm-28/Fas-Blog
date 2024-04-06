const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    blogId: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      data: Buffer,
      contentType: String,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
      required: true,
    },
  },
  { timestamps: true }
);

const BLOG = mongoose.model("Blog", blogSchema);

module.exports = BLOG;
