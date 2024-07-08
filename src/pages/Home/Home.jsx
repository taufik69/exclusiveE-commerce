import React from "react";
import Header from "../../Components/HomeComponent/Header/Header";
import Navbar from "../../Components/HomeComponent/Navbar/Navbar";
import Banner from "../../Components/HomeComponent/Banner/Banner";

const Home = () => {
  return (
    <div className="">
      <div className="bg-black_color">
        <Header />
      </div>
      <div className="border-b-[1px] border-b-gray-300">
        <Navbar />
      </div>
      <Banner />
    </div>
  );
};

export default Home;
