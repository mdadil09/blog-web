const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./db/db");
const blogRouter = require("./routes/blog");
const authRouter = require("./routes/user");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();
dotenv.config();
app.use(cors());

//PORT
const PORT = 5718;

//middlewares

app.use(bodyParser.json());

//Routes

app.use("/api/blogs", blogRouter);
app.use("/api/auth", authRouter);

//Database Connection

connectDB();

//Connecting to the port;

app.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}`);
});
