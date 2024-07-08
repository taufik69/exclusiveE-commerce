import React, { useState } from "react";
import Logo from "../../../assets/NavbarAssets/Logo.png";
import { IoSearch } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart4 } from "react-icons/bs";
const Navbar = () => {
  const [menu, setmenu] = useState(["Home", "Contact", "About", "Sign Up"]);

  return (
    <div className="container">
      <div className="flex items-center justify-between py-12">
        <div>
          <picture>
            <img src={Logo} alt={Logo} />
          </picture>
        </div>

        <div>
          <ul className="flex gap-x-12">
            {menu?.map((menuItem) => (
              <li
                key={menuItem}
                className="hoverEffect font-popins text-[16px] font-normal text-black_color"
              >
                {menuItem}{" "}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-x-10">
          <div className="relative">
            <input
              type="text"
              className="bg-[#F5F5F5] py-4 pl-3"
              placeholder="What are you looking for?"
            />
            <span className="absolute right-4 top-[34%]">
              <IoSearch className="text-xl text-black_color" />
            </span>
          </div>
          <span className="text-3xl text-black_color">
            <IoMdHeartEmpty />
          </span>
          <span className="text-3xl text-black_color">
            <BsCart4 />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
