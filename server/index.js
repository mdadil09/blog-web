const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./db/db");
const blogRouter = require("./routes/blog");
const authRouter = require("./routes/user");
const dotenv = require("dotenv");
const cors = require("cors");
const Blog = require("./Models/blogSchema");
const multer = require("multer");
const path = require("path");

const app = express();
dotenv.config();
app.use(cors());

//PORT
const PORT = 5718;

//middlewares

app.use(bodyParser.json());

//multer

//Routes

app.use("/api/blogs", blogRouter);
app.use("/api/auth", authRouter);

//Database Connection

connectDB();

//Connecting to the port;

app.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}`);
});
