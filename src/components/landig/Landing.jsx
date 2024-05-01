import React, { useState } from "react";
import { data } from "../../data/data";
import first from "../../assets/Vector (3).svg";
import second from "../../assets/Vector (4).svg";
import third from "../../assets/Vector (5).svg";
import fourth from "../../assets/Vector (6).svg";

const Landing = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <>
      <div className="rounded-lg w-[95%] text-[15px] h-[80vh] overflow-y-auto scroll-m-6">
        {data?.map((e, i) => (
          <div className=" mb-5 rounded-lg overflow-hidden pe-3" key={i}>
            <div className="flex rounded-lg overflow-hidden w-full text-[10px] xlg:text-[15px] ">
              <div
                className="flex-1 flex items-center justify-center bg-[var(--third-bg)] px-1 md:px-4 lg:px-7 py-4 cursor-pointer"
                onClick={() => handleToggle(i)}
              >
                <div className="flex justify-between lg:gap-5 gap-2 items-center">
                  <img
                    src={first}
                    alt=""
                    className="inline-block w-[18px] lg:w-[24px]"
                  />
                  <span>{e.company.toUpperCase()}</span>
                </div>
              </div>
              <div className=" border-l border-r border-gray-600 "></div>
              <div
                className="flex-1 flex items-center justify-center bg-[var(--third-bg)] px-1 md:px-4 lg:px-7 py-3 cursor-pointer"
                onClick={() => handleToggle(i)}
              >
                <div className="flex justify-between lg:gap-5 gap-2 items-center">
                  <img
                    src={second}
                    alt=""
                    className="inline-block w-[18px] lg:w-[24px]"
                  />
                  <span>{e.number}</span>
                </div>
              </div>
              <div className=" border-l border-r border-gray-600 "></div>
              <div
                className="flex-1 flex items-center justify-center bg-[var(--third-bg)] px-1 md:px-4 lg:px-7 py-3 cursor-pointer"
                onClick={() => handleToggle(i)}
              >
                <div
                  className="flex justify-between lg:gap-5 gap-2 items-center"
                  style={{ color: `var(--${e.color}-color)` }}
                >
                  <img
                    src={third}
                    alt=""
                    className="inline-block w-[18px] lg:w-[24px]"
                  />
                  <span>{e.stock}</span>
                </div>
              </div>
              <div className=" border-l border-r border-gray-600"></div>
              <div
                className="flex-1 flex items-center justify-center bg-[var(--third-bg)] px-1 md:px-4 lg:px-7 py-3 cursor-pointer"
                onClick={() => handleToggle(i)}
              >
                <div className="flex justify-between lg:gap-5 gap-2 items-center">
                  <img
                    src={fourth}
                    alt=""
                    className="inline-block w-[18px] lg:w-[24px]"
                  />
                  <span>{e.risk}</span>
                </div>
              </div>
            </div>
            <div
              className={expandedIndex === i ? "bg-black px-3 py-2" : "hidden"}
            >
              <span className=" mb-2 inline-block">
                <span className=" font-bold">$TSLA</span> just announced an
                acquisition of <span className=" font-bold">$NFLX</span> at{" "}
                <span className=" font-bold">$200 B</span>.
              </span>
              <p>
                This is an{" "}
                <span className="text-[var(--accent-color)] underline">
                  arbitrage opportunity
                </span>
                , with the max gain being %X if the deal closes, but the
                possible risk is %Y if the deal fails, If the deal success is %
                and therefore the recommended play is{" "}
                <span className=" text-[var(--accent-color)] underline">
                  long/short
                </span>{" "}
                $ABC
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Landing;
