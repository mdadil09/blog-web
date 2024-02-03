const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  body: { type: String, required: true },
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number,
  },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
