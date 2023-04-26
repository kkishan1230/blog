import React from "react";
import NavBar from "../NavBar";
import Container from "../Container";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
