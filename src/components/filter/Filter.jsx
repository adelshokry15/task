import React, { useContext, useRef, useState } from "react";
import { data } from "./../../data/data";
import { IoSearch } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { TbHeartbeat } from "react-icons/tb";
import { SiMaterialdesignicons } from "react-icons/si";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { VscSymbolConstant } from "react-icons/vsc";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaHouseUser } from "react-icons/fa";
import { GiCargoCrane } from "react-icons/gi";
import { FaRocketchat } from "react-icons/fa";
import { FaIndustry } from "react-icons/fa";
import { IoHammerOutline } from "react-icons/io5";
import { MdOutlineMonetizationOn } from "react-icons/md";
import { popupContext } from "../../context/PopupContext";

const Filter = () => {
  const { opened, setOpened } = useContext(popupContext);
  const [selected, setSelected] = useState(["Real Estate"]);
  const choices1 = [
    "Choice 1",
    "Choice 2",
    "Choice 3",
    "Choice 4",
    "Choice 5",
    "Choice 6",
    "Choice 7",
    "Choice 8",
  ];
  const choices2 = [
    "Choice 1",
    "Choice 2",
    "Choice 3",
    "Choice 4",
    "Choice 5",
    "Choice 6",
    "Choice 7",
    "Choice 8",
  ];

  const industries = [
    { name: "Health Care", icon: <TbHeartbeat /> },
    { name: "Materials", icon: <SiMaterialdesignicons /> },
    { name: "Energy", icon: <AiOutlineThunderbolt /> },
    { name: "Consumer Discretionary", icon: <VscSymbolConstant /> },
    { name: "Consumer Staples", icon: <AiOutlineShoppingCart /> },
    { name: "Real Estate", icon: <FaHouseUser /> },
  ];
  const industries2 = [
    { name: "IT", icon: <GiCargoCrane /> },
    { name: "Communication", icon: <FaRocketchat /> },
    { name: "Industrials", icon: <FaIndustry /> },
    { name: "Utilities", icon: <IoHammerOutline /> },
    { name: "Financials", icon: <MdOutlineMonetizationOn /> },
  ];
  return (
    <>
      <div className=" my-11 px-4 py-2 lg:py-4 bg-[var(--second-bg)] rounded-md relative">
        <IoMdClose
          className=" lg:hidden right-1 top-1 absolute cursor-pointer"
          onClick={() => {
            setOpened(false);
          }}
        />
        <h3 className="text-center text-[24px] font-semibold mb-4">Filters</h3>
        <div className=" flex justify-between items-center mb-1">
          <span className="text-[14px] text-[#979797] font-medium">
            Filters Applied
          </span>
          <span
            className="text-[14px] font-medium cursor-pointer"
            onClick={() => {
              setSelected([]);
            }}
          >
            Clear All
          </span>
        </div>
        <div className="bg-[var(--main-bg)] rounded-md px-2 py-1 mb-2 flex gap-2 min-h-[50px] flex-wrap">
          {selected?.map((e, index) => (
            <div
              key={index}
              className="bg-[var(--accent-color)] text-black text-[11px] px-1 rounded-md w-fit flex items-center gap-2 h-fit"
            >
              <span className=" bg-[var(--accent-color)]">{e}</span>
              <IoMdClose
                className=" cursor-pointer"
                onClick={() => {
                  setSelected(selected.filter((e, i) => i !== index));
                }}
              />
            </div>
          ))}
        </div>
        <div className="bg-[var(--main-bg)] p-3 mb-4">
          <h3 className="text-[14px] mb-2">Stock</h3>
          <div className="flex items-start gap-1 sm:gap-4 ">
            <div className="relative w-[77%] md:w-[80%] lg:w-full">
              <input
                type="text"
                placeholder="$ TICKER"
                className="w-full bg-[var(--third-bg)] px-3 py-1 rounded-md placeholder:text-[13px] text-[#737373] focus-visible:outline-none mb-1 lg:mb-4"
              />
              <IoSearch className=" absolute right-3 top-2 text-[#737373]" />
            </div>
            <button className="bg-[var(--accent-color)] my-0 lg:hidden px-2 py-1 rounded-md text-[14px]">
              My Filters
            </button>
          </div>
          <h3 className="ps-4 ms-4 text-[15px] before:content-[''] before:absolute relative before:border-[5px] before:border-transparent before:border-t-white before:left-0 before:top-[50%] before:translate-y-[-25%]">
            Industry
          </h3>
          <div className="flex mb-4 px-2 justify-between">
            <ul className="ps-2 before:content-[''] before:absolute relative before:h-full before:w-[1px] before:rounded-sm before:bg-white before:left-0">
              {industries?.map((e, i) => (
                <li
                  onClick={() => {
                    setSelected((prev) => [...prev, e.name]);
                  }}
                  key={i}
                  className="cursor-default flex items-center gap-2 mb-2 px-1 rounded-sm hover:text-black hover:bg-[var(--accent-color)] transition-all duration-200 text-[12px] w-fit"
                >
                  {e.icon}
                  {e.name}
                </li>
              ))}
            </ul>
            <ul className="ps-2 before:content-[''] before:absolute relative before:h-full before:w-[1px] before:rounded-sm before:bg-white before:left-0">
              {industries2?.map((e, i) => (
                <li
                  onClick={() => {
                    setSelected((prev) => [...prev, e.name]);
                  }}
                  key={i}
                  className="cursor-default flex items-center gap-2 mb-2 px-1 rounded-sm hover:text-black hover:bg-[var(--accent-color)] transition-all duration-200 text-[12px] w-fit"
                >
                  {e.icon}
                  {e.name}
                </li>
              ))}
            </ul>
          </div>
          <div className=" flex gap-10 justify-between px-10 text-[13px] mb-5">
            <div>
              <h3 className=" ms-4 text-[15px] before:content-[''] before:absolute relative before:border-[5px] before:border-transparent before:border-t-white before:left-[-14px] before:top-[50%] before:translate-y-[-25%]">
                Market Cap
              </h3>
              <ul className="ps-2">
                <li className=" flex items-center">
                  <input
                    name="market"
                    type="radio"
                    value={"micro"}
                    id="micro"
                    className="p-1 me-2"
                  />
                  <label htmlFor="micro">Micro</label>
                </li>
                <li className=" flex items-center">
                  <input
                    name="market"
                    type="radio"
                    value={"small"}
                    id="small"
                    className="p-1 me-2"
                  />
                  <label htmlFor="small">Small</label>
                </li>
                <li className=" flex items-center">
                  <input
                    name="market"
                    type="radio"
                    value={"large"}
                    id="large"
                    className="p-1  me-2"
                  />
                  <label htmlFor="large">Large</label>
                </li>
              </ul>
            </div>
            <div>
              <h3 className=" ms-4 text-[15px] before:content-[''] before:absolute relative before:border-[5px] before:border-transparent before:border-t-white before:left-[-14px] before:top-[50%] before:translate-y-[-25%]">
                Risk Level
              </h3>
              <ul className="ps-2">
                <li className=" flex items-center">
                  <input
                    name="risk"
                    type="radio"
                    value={"low"}
                    id="low"
                    className="p-1 me-2"
                  />
                  <label htmlFor="low">Low Risk</label>
                </li>
                <li className=" flex items-center">
                  <input
                    name="risk"
                    type="radio"
                    value={"mid"}
                    id="mid"
                    className="p-1 me-2"
                  />
                  <label htmlFor="mid">Mid Risk</label>
                </li>
                <li className=" flex items-center">
                  <input
                    name="risk"
                    type="radio"
                    value={"high"}
                    id="high"
                    className="p-1  me-2"
                  />
                  <label htmlFor="small">High Risk</label>
                </li>
              </ul>
            </div>
          </div>
          <div className=" flex gap-6 justify-between px-8">
            <div className=" text-center">
              <h3 className="text-[15px] mb-2">Strategy</h3>
              <div className="wheel-picker1 relative">
                <div
                  className="picker-select1 overflow-y-scroll px-3 py-10 h-[100px] relative overflow-hidden"
                  style={{ scrollbarWidth: "none" }}
                >
                  {choices1.map((choice, index) => (
                    <p
                      key={index}
                      className={`choice1 my-2 cursor-pointer px-2 rounded-md text-gray-500 ${
                        index == 4 ? `active1` : `null`
                      }`}
                      onClick={(e) => {
                        document.querySelector(".picker-select1").scrollTo({
                          top:
                            e.target.offsetTop -
                            document.querySelector(".picker-select1")
                              .offsetTop -
                            document.querySelector(".picker-select1")
                              .offsetHeight /
                              2 +
                            document.querySelector(".choice1").offsetHeight / 2,
                          behavior: "smooth",
                        });
                        document.querySelectorAll(".active1").forEach((e) => {
                          e.classList.remove("active1");
                        });
                        e.target.classList.add("active1");
                      }}
                    >
                      {choice}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-[15px] mb-2">Asset</h3>
              <div className="wheel-picker2 relative">
                <div
                  className="picker-select2 overflow-y-scroll px-3 py-10 h-[100px] relative overflow-hidden"
                  style={{ scrollbarWidth: "none" }}
                >
                  {choices2.map((choice, index) => (
                    <p
                      key={index}
                      className={`choice2 my-2 cursor-pointer px-2 rounded-md text-gray-500 ${
                        index == 4 ? `active2` : `null`
                      }`}
                      onClick={(e) => {
                        document.querySelector(".picker-select2").scrollTo({
                          top:
                            e.target.offsetTop -
                            document.querySelector(".picker-select2")
                              .offsetTop -
                            document.querySelector(".picker-select2")
                              .offsetHeight /
                              2 +
                            document.querySelector(".choice2").offsetHeight / 2,
                          behavior: "smooth",
                        });
                        document.querySelectorAll(".active2").forEach((e) => {
                          e.classList.remove("active2");
                        });
                        e.target.classList.add("active2");
                      }}
                    >
                      {choice}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center gap-3 lg:gap-0">
          <button className="bg-black rounded-sm py-1 w-[100px] block border-white border-[1px] lg:hidden">
            Save Filter
          </button>
          <button className="bg-[var(--accent-color)] rounded-sm py-1 w-[100px] block">
            Apply
          </button>
        </div>
      </div>
    </>
  );
};

export default Filter;
