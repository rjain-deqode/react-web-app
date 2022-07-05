import React from "react";
import { Banner } from "../header/banner/Banner";
import { TopHeader } from "../header/top-header/nav-left/TopHeader";
import { NavList } from "./nav-bar/NavList";

export const Header = () => {
  return (
    <div>
      <Banner />
      <TopHeader />
      <NavList />
    </div>
  );
};
