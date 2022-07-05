import React, { useState } from "react";
import {
  Dropdown,
  DropdownContent,
  DropdownItems,
  DropdownBtn,
  Icon,
} from "./TopHeader.style";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiWorld } from "react-icons/bi";

export const CurrencyDropdown = ({ curSelected, setCurSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const options = ["EUR $", "USD $"];
  return (
    <Dropdown>
      <DropdownBtn onClick={(e) => setIsActive(!isActive)}>
        <Icon>
          <BiWorld />
        </Icon>
        {curSelected ? curSelected : "$ USD"}
        <Icon variant="arrow">
          <MdOutlineKeyboardArrowDown />
        </Icon>
      </DropdownBtn>
      {isActive && (
        <DropdownContent>
          {options.map((option, index) => {
            return (
              <DropdownItems
                key={index}
                onClick={(e) => {
                  setCurSelected(option);
                  setIsActive(false);
                }}
              >
                {option}
              </DropdownItems>
            );
          })}
        </DropdownContent>
      )}
    </Dropdown>
  );
};
