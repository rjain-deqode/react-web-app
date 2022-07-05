import React, { useState } from "react";
import {
  Dropdown,
  DropdownContent,
  DropdownItems,
  DropdownBtn,
  Image,
  Icon,
} from "./TopHeader.style";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { options } from "../nav-left/data";

export const DropdownMenu = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <Dropdown>
        <DropdownBtn onClick={(e) => setIsActive(!isActive)}>
          <Icon>
            <BiWorld />
          </Icon>
          {selected.label ? selected.label : "English"}
          <Icon variant="arrow">
            <MdOutlineKeyboardArrowDown />
          </Icon>
        </DropdownBtn>
        {isActive && (
          <DropdownContent>
            {options.map((option, index) => {
              const { img, label } = option;
              return (
                <DropdownItems
                  key={index}
                  onClick={(e) => {
                    setSelected(option);
                    setIsActive(false);
                  }}
                >
                  <Image src={img} alt={label}></Image>
                  {label}
                </DropdownItems>
              );
            })}
          </DropdownContent>
        )}
      </Dropdown>
    </>
  );
};
