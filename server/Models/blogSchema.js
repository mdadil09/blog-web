const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    body: { type: String, required: true },
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    picturePath: String,
    meta: {
      votes: Number,
      favs: Number,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
