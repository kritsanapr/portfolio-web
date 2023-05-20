import React from "react";
import HeaderMenu from "../components/HeaderMenu";
function MainLayout({ children }) {
  return (
    <>
      <HeaderMenu />
      {children}
    </>
  );
}

export default MainLayout;
