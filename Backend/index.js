const express = require("express");
const { connectToMongoDB } = require("./connect");
const blogRoute = require("./Routes/BlogRoute");
const BLOG = require("./Models/Blog");

const app = express();
const PORT = 8000;

connectToMongoDB("mongodb://localhost:27017/BlogDB")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => console.error("Error  connecting to MongoDB", err));

app.use(express.json());

app.use("/", blogRoute);

app.listen(PORT, () => console.log("Server started at port: " + PORT));
