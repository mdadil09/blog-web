import axios from "axios";
import React, { useState } from "react";
import { BlogState } from "../context/BlogProvider";

const BlogPostPage = () => {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [body, setBody] = useState();
  const [selectedFile, setSelectedFile] = useState(null);

  const { user } = BlogState();

  const handleSubmit = async () => {
    const authToken = user.data.token;
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      };

      const data = await axios.post(
        "http://localhost:5718/api/blogs/add",
        { title, author, body },
        config
      );

      localStorage.setItem("postInfo", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className="blog-post">
      <div className="blog-form">
        <div className="blog-img">
          <label for="files" className="img-file-label">
            Add Cover Image
          </label>
          <input
            type="file"
            placeholder="Add Cover Image"
            className="img-file-input"
            onChange={handleFileChange}
          />
        </div>
        <div className="blog-title">
          <div>
            <input
              type="text"
              placeholder="Enter Blog Tiltle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="common-input"
            />
          </div>
        </div>
        <div className="blog-author">
          <div>
            <input
              type="text"
              placeholder="Enter Author Name"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="common-input"
            />
          </div>
        </div>
        <div className="blog-body">
          <div>
            <textarea
              type="text"
              placeholder="Write Something...."
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="body-input"
            />
          </div>
        </div>
        <div className="blog-button">
          <button onClick={handleSubmit}>Publish</button>
        </div>
      </div>
      <div className="blog-guidlines">guide lines</div>
    </div>
  );
};

export default BlogPostPage;
