import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Header from "./Components/Header";
import BlogSection from "./Pages/Home/BlogSection";
import Post from "./Pages/Post/Post";

function App() {
  return (
    <div className="app mt-14 min-h-screen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/" element={<BlogSection />} />
          <Route path="/createPost" element={<Post />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
