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
    category: {
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
      authorName: {
        type: String,
        required: true,
      },
      authorEmail: {
        type: String,
        required: true,
        unique: true,
      },
    },
  },
  { timestamps: true }
);

const BLOG = mongoose.model("Blog", blogSchema);

module.exports = BLOG;
