import open from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";
import React from "react";

const Menu = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <img src={close} alt="" /> : <img src={open} alt="" />}
      </button>
    </>
  );
};

export default Menu;
