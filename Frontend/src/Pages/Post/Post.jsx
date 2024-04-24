import { useState } from "react";
import Banner from "../../Components/Banner";

const Post = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    content: "",
    image: null,
    user: "john@example.com",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    console.log(e.target.files);
    setFormData({
      ...formData,
      image: {
        data: { ...e.target.files[0] },
        contentType: e.target.files[0].type,
        path: `Assets/Images/${e.target.files[0].name}`,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const requestBody = {
      title: formData.title,
      category: formData.category,
      content: formData.content,
      // image: formData.image,
      user: formData.user,
    };
    console.log(requestBody);
    try {
      const response = await fetch("http://localhost:8000/api/createPost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        console.log("Blog post created successfully!");
      } else {
        console.error("Failed to create blog post.");
      }
    } catch (error) {
      console.error("Error creating blog post:", error);
    }
  };

  return (
    <div>
      <Banner title="Post a new blog." />
      <form
        className="p-5"
        encType="multipart/form-data"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={handleChange}
            placeholder="Blog Title"
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-gray-700 font-bold mb-2"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            onChange={handleChange}
            className="w-full border rounded py-2 px-3 text-gray-700"
          >
            <option value="" disabled selected hidden className="text-gray-100">
              Choose a category
            </option>
            <option value="Technology">Technology</option>
            <option value="Marketing">Marketing</option>
            <option value="Finance">Finance</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-gray-700 font-bold mb-2"
          >
            Description
          </label>
          <textarea
            id="content"
            name="content"
            onChange={handleChange}
            className="border rounded w-full h-44 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Write your blog here!"
          />
        </div>

        {/* <div className="flex flex-row justify-end mt-2">
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
          >
            Submit Post
          </button>
        </div> */}
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
            Image
          </label>
          <input
            type="file"
            id="image"
            onChange={handleFileChange}
            name="image"
            accept="image/*"
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex flex-row justify-end mt-2">
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
          >
            Submit Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default Post;
