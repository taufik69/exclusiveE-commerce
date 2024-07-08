import React from "react";
import BannerLeft from "../../CommonComponent/BannerLeftComponent/BannerLeft";
const Banner = () => {
  return (
    <>
      <div className="container">
        <div className="flex">
          <div className="basis-[30%] border-r-[1px] border-r-gray-300">
            <div>
              <BannerLeft />
            </div>
          </div>
          <div className="basis-[60%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            molestiae neque sit consequuntur asperiores quo. Repudiandae
            doloribus enim quam temporibus. Pariatur nam nulla quo accusamus
            iste enim non, blanditiis quia!
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
