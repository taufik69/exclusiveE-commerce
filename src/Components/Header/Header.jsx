import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
const Header = () => {
  const [dropdown, setdropdown] = useState(false);
  /**
   * todo :handleDropdown function implement
   * @parms({})
   */

  const handleDropdown = () => {
    setdropdown(!dropdown);
  };
  return (
    <div className="flex justify-between py-[15px]">
      <div></div>
      <div className="flex items-center gap-x-[8px]">
        <h1 className="font-popins text-sm font-normal text-white opacity-75">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </h1>
        <span className="font-semibold text-white">ShopNow</span>
      </div>
      <div onClick={handleDropdown} className="relative cursor-pointer">
        <div className="flex items-center">
          <span className="text-white"> English</span>
          <span className="text-white">
            <MdKeyboardArrowDown className="text-xl" />
          </span>
        </div>
        {dropdown && (
          <div className="absolute top-9 flex flex-col bg-orange-500 px-5 py-4 text-white">
            <span>Bangla</span>
            <span>Spanish</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
