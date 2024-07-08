import React, { useState } from "react";
import { catagory } from "../../../../DataBase/db";
import { FaChevronRight } from "react-icons/fa";

const BannerLeft = () => {
  const [activeSubcatgoris, setactiveSubcatgoris] = useState(
    catagory.map((item) => (item.subCatagory ? false : null)),
  );
  console.log(activeSubcatgoris);

  /**
   * todo : showsubCatagories state change and render subCatagories
   * @funtion handleSubcatagory
   * @param({index})index
   */
  const handleSubcatagory = (idx) => {
    setactiveSubcatgoris(() => {
      return activeSubcatgoris.map((item, index) =>
        index == idx ? !item : false,
      );
    });
  };
  return (
    <div>
      <div>
        {catagory?.map((item, index) =>
          item.subCatagory ? (
            <div key={item.id} className="py-3">
              <div
                className="flex items-center justify-between"
                onClick={() => handleSubcatagory(index)}
              >
                <h1 className="cursor-pointer">{item.catagory}</h1>
                <span>
                  <FaChevronRight className="mr-8" />
                </span>
              </div>
              {activeSubcatgoris[index] && (
                <ul>
                  {item.subCatagory?.map((subitem) => (
                    <li key={subitem.id}>{subitem.subCatgory}</li>
                  ))}
                </ul>
              )}
            </div>
          ) : (
            <div className="cursor-pointer py-3">
              {" "}
              <h1> {item.catagory}</h1>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default BannerLeft;
