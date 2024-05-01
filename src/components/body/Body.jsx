import React, { useContext, useEffect } from "react";
import Home from "../home/Home";
import Filter from "../filter/Filter";
import { popupContext } from "../../context/PopupContext";

const Body = () => {
  const { opened, setOpened } = useContext(popupContext);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024 && opened) {
        setOpened(true);
      } else {
        setOpened(false);
      }
    };

    window.addEventListener("resize", handleResize);
  });
  return (
    <>
      <div className=" grid xl:grid-cols-3 lg:grid-cols-5 gap-2">
        <div className="xl:col-span-2 lg:col-span-3 col-span-3">
          <Home />
        </div>
        <div
          className={`xl:col-span-1 lg:col-span-2 lg:block ${
            opened && window.innerWidth < 1200
              ? `fixed z-50 right-0 left-0 top-0 bottom-0 block backdrop-blur-md`
              : `hidden`
          }  `}
        >
          <div
            className={`${
              opened
                ? `fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-[90%] md:w-[75%] `
                : null
            }`}
          >
            <Filter />
          </div>
        </div>
        {/* <div className=" absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] w-16 bg-red-600">
          sadasdasdasd
        </div> */}
      </div>
    </>
  );
};

export default Body;
