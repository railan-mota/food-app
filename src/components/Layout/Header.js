import React from "react";

import HeaderCart from "./HeaderCart";
import space from "../../img/d-space.jpg";

const Header = (props) => {
  return (
    <>
      <header className="h-20 z-10 w-screen flex px-[5%] lg:px-[10%] py-4 justify-between items-center bg-[#3D087B] ">
        <h2 className="lg:text-3xl hover:cursor-pointer uppercase">
          Space Burguer
        </h2>
        <HeaderCart onClickCart={props.onClickCart} />
      </header>
      <img
        src={space}
        alt="Space"
        className="fixed top-0 opacity-70 shadow-md h-screen w-screen object-cover -z-10 overflow-hidden"
      />
    </>
  );
};

export default Header;
