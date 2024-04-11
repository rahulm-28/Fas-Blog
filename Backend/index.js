const express = require("express");
const { connectToMongoDB } = require("./connect");
const blogRoute = require("./Routes/BlogRoute");
const cors = require("cors");
const BLOG = require("./Models/Blog");

const app = express();
const PORT = 8000;

app.use(cors());

connectToMongoDB("mongodb://localhost:27017/BlogDB")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => console.error("Error  connecting to MongoDB", err));

app.use(express.json());

app.use("/api", blogRoute);

app.listen(PORT, () => console.log("Server started at port: " + PORT));
