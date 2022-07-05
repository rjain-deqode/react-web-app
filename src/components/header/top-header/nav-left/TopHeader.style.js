import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.3rem;
  color: var(--clr-grey-5);
  padding: 0 15px;
`;

export const NavLeft = styled.div`
  margin-right: 20px;
  display: flex;
  align-items: center;
`;

export const Dropdown = styled.div`
  cursor: pointer;
  user-select: none;
  position: relative;
  margin: 0 20px;
  transition: all 0.2s ease-in-out 0s;
  position: relative;
  &:not(:last-child):after {
    background: #999;
    content: "";
    height: 10px;
    margin-top: -5px;
    position: absolute;
    right: -20px;
    top: 50%;
    width: 1px;
  }
  &:first-child {
    margin-left: 0;
  }
`;

export const DropdownBtn = styled.button`
  display: flex;
  justify-content: space-between;
  background: transparent;
  align-items: center;
  border: none;
  font-size: 14px;
  cursor: pointer;
  line-height: 20px;
  color: var(--clr-grey-7);
  font-weight: 300;
  padding: 10px 0;
  margin: ${(props) => (props.variant === "account" ? "0 0 0 20px" : "0")};
`;

export const DropdownContent = styled.div`
  width: 100%;
  min-width: 110px;
  background-color: var(--clr-white);
  box-shadow: var(--box-shadow);
  z-index: 1000;
  border: none;
  font-size: inherit;
  border-radius: 3px;
  padding: 5px 0;
  position: absolute;
  top: 38px;
  left: 0;
`;

export const DropdownItems = styled.a`
  font-size: 14px;
  color: var(--clr-grey-7);
  display: flex;
  align-items: center;
  padding: 5px 15px;
  font-weight: 300;
  &:hover {
    background-color: var(--clr-grey-9);
  }
`;

export const Image = styled.img`
  width: 16px;
  height: 13px;
  vertical-align: middle;
  margin-right: 5px;
`;

export const Icon = styled.span`
  margin: ${(props) => (props.variant === "arrow" ? "0 0 0 5px" : "0 5px 0 0")};
  display: inline-block;
  font-weight: 300;
  svg {
    vertical-align: middle;
  }
`;

export const NavCenter = styled.div`
  margin: 14px 0;
  z-index: 1;
  position: relative;
`;
export const NavRight = styled.div`
  margin-left: 20px;
  text-align: right;
  @media (min-width: 992px) {
    min-width: 320px;
  }
`;
export const Link = styled.a`
  margin: 0 15px;
  cursor: pointer;
  font-size: 22px;
  color:var(--clr-grey-7) &:last-child {
    margin-right: 0;
  }
`;
