import "./App.css";

import Layout from "/src/components/Layout";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "/src/styles/styles.scss";
import Home from "./Pages/Home";
import MyBlogs from "./Pages/MyBlogs";
import Login from "./Pages/Login";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my-blogs" element={<MyBlogs />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
