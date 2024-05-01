import React, { useContext } from "react";
import alerts from "../../assets/Vector (7).svg";
import { IoSearch } from "react-icons/io5";
import { popupContext } from "../../context/PopupContext";

const SearchSection = () => {
  const { opened, setOpened } = useContext(popupContext);

  return (
    <>
      <div className=" flex gap-6 items-center mb-6 justify-between w-full">
        <h1 className=" text-[48px] before:content-[''] before:absolute relative before:w-2 before:h-full before:bg-[var(--accent-color)] before:rounded-md before:left-[-16px]">
          ALERTS
        </h1>
        <div className=" flex items-center justify-end xl:justify-center gap-4 flex-1">
          <div className="relative  w-full max-w-[620px] hidden sm:block">
            <input
              type="search"
              placeholder="Search By..."
              className=" w-full p-2 rounded-md bg-[var(--third-bg)] hover:border-[var(--accent-color)] border-2 border-transparent focus-visible:outline-none "
            />
            <IoSearch className=" absolute right-3 top-2 text-[#717171] text-2xl" />
          </div>
          <IoSearch className=" text-[#717171] text-2xl inline-block sm:hidden" />
          <span className="hidden lg:inline-block after:content-['6']  relative after:absolute after:text-white after:bg-[var(--green-color)] after:w-3 after:h-3 lg:after:w-4 lg:after:h-4 after:flex after:justify-center after:items-center after:text-[12px] after:text-center after:rounded-full after:top-[-5px] after:right-[-5px] text-sm font-medium text-slate-700">
            <img src={alerts} alt="" />
          </span>
          <button
            onClick={() => setOpened(true)}
            className="inline-block text-[11px] lg:hidden bg-[var(--accent-color)] rounded-md py-2 w-[100px]"
          >
            Filter
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchSection;
