import React from "react";

import { AiFillHome } from "react-icons/ai";

import Container from "../Container";

import stl from "./NavBar.module.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={stl.navBar}>
      <Container>
        <div className={stl.navLinks}>
          <Link href="/">
            <AiFillHome size="20px" />
          </Link>
          <div className={stl.links}>
            <Link to="/">Home</Link>
            <Link to="/">Feed</Link>
            <Link to="/my-blogs">My blogs</Link>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
