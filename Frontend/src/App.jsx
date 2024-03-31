import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import BlogSection from "./Pages/Home/BlogSection";

function App() {
  return (
    <div className="app mt-12 min-h-screen">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Blogs" element={<BlogSection />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
