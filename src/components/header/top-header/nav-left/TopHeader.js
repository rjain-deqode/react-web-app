import React, { useState } from "react";
import { HeaderWrapper, NavLeft, NavCenter, NavRight, Link } from "./TopHeader.style";
import { DropdownMenu } from "../nav-left/DropdownMenu";
import { CurrencyDropdown } from "../nav-left/CurrencyDropdown";
import { MyAccountSidebar } from "../nav-left/MyAccountSidebar";
import logo from "../images/axon-travel-logo.jpg";
import { HiSearch, HiShoppingCart } from "react-icons/hi";
import { NavMenus } from "../../nav-bar/NavMenus";

export const TopHeader = () => {
  const [selected, setSelected] = useState("");
  const [curSelected, setCurSelected] = useState("");
  return (
    <HeaderWrapper>
      <NavLeft>
        <DropdownMenu selected={selected} setSelected={setSelected} />
        <CurrencyDropdown
          curSelected={curSelected}
          setCurSelected={setCurSelected}
        />
        <MyAccountSidebar />
      </NavLeft>
      <NavCenter>
        <img src={logo} alt="Axon" />
      </NavCenter>
      <NavRight>
        <Link>
          <HiSearch />
        </Link>
        <Link>
          <HiShoppingCart />
        </Link>
      </NavRight>
    </HeaderWrapper>
  );
};
