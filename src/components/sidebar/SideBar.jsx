import React, { useEffect } from "react";
import logo from "../../assets/street suite logo-04 1.png";
import group from "../../assets/Group.png";
import vector1 from "../../assets/Vector (1).svg";
import group1 from "../../assets/Group (1).svg";
import { GoBellFill } from "react-icons/go";
import { FaGraduationCap } from "react-icons/fa";
import profile from "../../assets/—ÎÓÈ 1.png";
import alerts from "../../assets/Vector (7).svg";

const SideBar = () => {
  useEffect(() => {
    let sidebar = document.querySelector(".sidebar");
    let sidebarSpans = Array.from(
      document.querySelectorAll(".sidebar li span")
    );

    sidebar.addEventListener("mouseenter", () => {
      sidebarSpans?.forEach((e) => {
        e.classList.remove("hidden");
        e.classList.add("block");
      });
    });
    sidebar.addEventListener("mouseleave", () => {
      sidebarSpans?.forEach((e) => {
        e.classList.add("hidden");
        e.classList.remove("block");
      });
    });
  }, []);

  return (
    <>
      <div className="sidebar z-30 flex flex-col overflow-hidden bg-[var(--second-bg)] ms-2 w-[65px] hover:shadow-custom hover:animate-widthIncrease fixed left-0 top-0 bottom-0 px-3 py-6 hover:w-[190px] transition-all duration-500 ease-in-out">
        <h2 className=" mb-12">
          <img
            src={logo}
            alt="logo"
            className="logo w-[40px] h-[20px] transition-all duration-500"
          />
        </h2>
        <div className=" flex flex-col flex-1 justify-between">
          <ul className="ps-2">
            <li className=" flex  items-center mb-6 gap-2 hover:text-[var(--accent-color)] hover:cursor-default">
              <GoBellFill className=" text-2xl duration-200" />
              <span className="hidden">Alerts</span>
            </li>
            <li className=" flex  items-center mb-6 gap-2 hover:text-[var(--accent-color)] hover:cursor-default">
              <FaGraduationCap className=" text-2xl duration-200" />
              <span className="hidden">Training</span>
            </li>
            <li className="relative flex  items-center mb-6 gap-2 text-[#939393]">
              <img src={group} alt="" />
              <span className="hidden">Automation</span>
              <p className=" absolute rounded-md cursor-default px-3 opacity-0">
                Coming Soon
              </p>
            </li>
            <li className="relative flex  items-center mb-6 gap-2 text-[#939393]">
              <img src={vector1} alt="" />
              <span className="hidden">Portfolio</span>
              <p className=" absolute rounded-md cursor-default px-3 opacity-0">
                Coming Soon
              </p>
            </li>
            <li className="relative flex  items-center gap-2 text-[#939393]">
              <img src={group1} alt="" />
              <span className="hidden">Trading</span>
              <p className=" absolute rounded-md cursor-default px-3 opacity-0">
                Coming Soon
              </p>
            </li>
          </ul>
          <div>
            <span className="absolute left-[50%] bottom-[10px] -translate-x-[50%] ps-1 notifications inline-block mb-3 text-center justify-end lg:hidden after:content-['6']  relative after:absolute after:text-white after:bg-[var(--green-color)] after:w-3 after:h-3 lg:after:w-4 lg:after:h-4 after:flex after:justify-center after:items-center after:text-[12px] after:text-center after:rounded-full after:top-[-5px] after:right-[-5px] text-sm font-medium text-slate-700">
              <img src={alerts} alt="" />
            </span>
            <div className="profile flex gap-1 items-center mb-2">
              <img src={profile} alt="" className=" me-2" />
              <div className="info opacity-0 duration-200 text-[13px]">
                <p className=" mb-2 font-bold">Moni Roy</p>
                <span className=" text-[#939393] font-semibold">Beginner</span>
              </div>
            </div>
            <span className="version text-[#424242] text-[14px] text-center hidden">
              Street Suite. 2.0
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
