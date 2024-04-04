import { useState } from "react";
import AddBlogDialog from "./AddBlogDialog";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isAddBlogModalOpen, setIsAddBlogModalOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <header className="flex fixed top-0 w-full z-10 items-center justify-between px-4 py-2 bg-white shadow-md">
      <a
        href="/"
        className="flex items-center flex-shrink-0 text-black mr-6 justify-center"
      >
        <span className="font-semibold text-xl tracking-tight">Fas-Blog</span>
        <img
          className="h-8 w-8 ml-2"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt=""
        />
      </a>
      <button
        type="button"
        className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
      >
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
        <span className="sr-only">Open main menu</span>
      </button>
      <div className="flex overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ cursor: "pointer" }}
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
          xlinkTitle="Add new blog"
          onClick={() => {
            navigate("/createPost");
          }}
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
            clipRule="evenodd"
          />
        </svg>

        <img
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </div>
    </header>
  );
};

export default Header;
