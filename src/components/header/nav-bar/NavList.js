import React from "react";
import { NavWrapper, List, Link } from "../nav-bar/Navbar.style";
import { sublink } from "./data";

export const NavList = () => {
  return (
    <NavWrapper>
      <List>
        {sublink.map((link, index) => {
          const { page } = link;
          return (
            <li key={index}>
              <Link href="">{page}</Link>
            </li>
          );
        })}
      </List>
    </NavWrapper>
  );
};
