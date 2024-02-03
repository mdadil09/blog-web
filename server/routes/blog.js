const express = require("express");
const {
  addBlog,
  getAllBlog,
  getSingleBlog,
  searchBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blog");
const protect = require("../middlewares/auth");

const router = express.Router();

router.post("/add", protect, addBlog);
router.get("/", getAllBlog);
router.get("/:id", getSingleBlog);
router.get("/search/:key", searchBlog);
router.patch("/update/:id", protect, updateBlog);
router.delete("/delete/:id", protect, deleteBlog);

module.exports = router;
