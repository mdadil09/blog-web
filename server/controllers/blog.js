const Blog = require("../Models/blogSchema");

const addBlog = async (req, res) => {
  try {
    const result = await Blog.create(req.body);
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send("Data format is not valid!");
  }
};

const getAllBlog = async (req, res) => {
  try {
    const result = await Blog.find();
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

const getSingleBlog = async (req, res) => {
  try {
    const blogId = parseInt(req.params.id);
    const result = await Blog.findOne({ id: blogId });
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send("Id Doesn't Exists");
  }
};

const searchBlog = async (req, res) => {
  try {
    const blogKey = req.params.key;
    const result = await Blog.find({
      $or: [
        { title: { $regex: blogKey, $options: "i" } },
        { author: { $regex: blogKey, $options: "i" } },
      ],
    });
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send("Key doesn't Exists");
  }
};

const updateBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const result = await Blog.findByIdAndUpdate(
      { _id: blogId },
      {
        $set: { body: req.body.body },
      },
      { new: true }
    );
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send("Id doesn't Exists");
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const result = await Blog.deleteOne({
      _id: blogId,
    });
    res.status(200).send("Blog Deleted Successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Id Doesn't Exists");
  }
};

module.exports = {
  addBlog,
  getAllBlog,
  getSingleBlog,
  searchBlog,
  updateBlog,
  deleteBlog,
};
