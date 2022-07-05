import React from "react";
import { FaUser } from "react-icons/fa";
import { DropdownBtn, Icon } from "./TopHeader.style";

export const MyAccountSidebar = () => {
  return (
    <DropdownBtn variant="account">
      <Icon>
        {" "}
        <FaUser />
      </Icon>
      My Account
    </DropdownBtn>
  );
};
