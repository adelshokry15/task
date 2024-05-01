import React from "react";
import SearchSection from "../searchSection/SearchSection";
import Landing from "../landig/Landing";

const Home = () => {
  return (
    <>
      <div className=" ms-24 mt-10 px-2">
        <SearchSection />
        <Landing />
      </div>
    </>
  );
};

export default Home;
