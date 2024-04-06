const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  authorName: {
    type: String,
    required: true,
  },
  authorEmail: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Author", authorSchema);
