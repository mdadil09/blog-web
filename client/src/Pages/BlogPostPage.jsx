import axios from "axios";
import React, { useState } from "react";
import { BlogState } from "../context/BlogProvider";

const BlogPostPage = () => {
  const [id, setId] = useState();
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [body, setBody] = useState();

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
        { id, title, author, body },
        config
      );

      localStorage.setItem("postInfo", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="blog-post">
      <div className="blog-form">
        <div className="blog-id">
          <label>Id:</label>
          <input
            type="text"
            placeholder="enter your id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="blog-title">
          <label>Title:</label>
          <input
            type="text"
            placeholder="enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="blog-author">
          <label>Author:</label>
          <input
            type="text"
            placeholder="enter author name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="blog-body">
          <label>Body:</label>
          <input
            type="text"
            placeholder="Write Something...."
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <div className="blog-button">
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
