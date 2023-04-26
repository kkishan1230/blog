import React from "react";

import stl from "./Container.module.scss";

const Container = ({ children }) => {
  return <div className={stl.container}>{children}</div>;
};

export default Container;
