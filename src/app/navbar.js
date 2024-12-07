"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../src/dex-logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiMiniXMark } from "react-icons/hi2";
import { FaCaretDown } from "react-icons/fa";
import { IoMdGlobe } from "react-icons/io";
import { CiBellOn } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);

  const handleOpenNavbar = () => {
    setOpenNavbar(!openNavbar);
  };
  return (
    <section className="lg:px-24 lg:h-16 lg:items-center pt-2 flex lg:flex-row  fixed top-0 left-0 right-0 z-30 bg-[#0a0a0a] shadow-md items-center flex-col lg:gap-x-40  gap-x-4 px-3 mt-4 lg:mt-0">
      <div className="px-4 lg:px-0 lg:w-1/4 flex flex-row justify-between items-center w-full  lg:w-[20%] ">
        <div className="flex flex-row gap-x-2 items-center">
          {!openNavbar ? (
            <RxHamburgerMenu
              className="text-xl lg:hidden"
              onClick={handleOpenNavbar}
            />
          ) : (
            <HiMiniXMark
              className="text-xl lg:hidden"
              onClick={handleOpenNavbar}
            />
          )}
          <Image
            src={logo}
            width={60}
            height={30}
            className="items-center"
            alt="Zet Foundation Logo"
          />
        </div>
      </div>

      <div
        className={`${
          openNavbar
            ? "bg-[#0a0a0a]  h-[100vh] px-4 lg:px-0 py-4 lg:py-0 mt-20 text-white "
            : " h-0"
        } shadow-md transition-all delay-400 duration-300 lg:h-full lg:shadow-none w-full   lg:text-white lg:bg-[#0a0a0a] relative lg:w-[70%] `}
      >
        <ul className="flex  lg:px-2  lg:justify-start  lg:gap-x-2 lg:items-center gap-y-8 lg:gap-y-0  lg:text-sm flex-col lg:flex-row  h-full relative text-xl">
          <div>
            <li
              className={`${
                openNavbar ? "visible" : "hidden"
              } hover:lg:bg-[#ECD337]  hover:lg:text-gray-950 lg:block  text-white lg:text-white lg:h-8 lg:w-20 lg:text-center lg:flex lg:items-center lg:justify-center transition-all delay-400 duration-300 lg:ml-0`}
              onClick={() => navBarHandler("about")}
            >
              Perps
            </li>
          </div>
          <article>
            <div
              className={`${
                openNavbar ? "visible" : "hidden"
              }  lg:block text-white lg:text-white lg:h-8 lg:w-20 lg:text-center lg:flex lg:items-center lg:justify-center transition-all delay-400 duration-300 cursor-pointer flex flex-row items-center justify-between`}
            >
              <h2>Spot</h2>
              {!openNavbar && <FaCaretDown />}
              {/* {showPortalMenu ? (
                  <RxCaretUp className="text-lg" />
                ) : (
                  <RxCaretDown className="text-lg" />
                )} */}
            </div>
            {/* <AnimatePresence>
                {showPortalMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.1 }}
                    className={
                      `${true && "hidden"} flex bg-white h-20 px-2  flex-col gap-y-2 py-1 transition-all lg:absolute lg:bg-white justify-center lg:rounded-md lg:z-20 lg:ml-2 lg:border lg:w-32 lg:text-sm`
                    }
                    
                  >
                    <Link href="/portals/assignments" >Assignments</Link>
                    <Link href="/portals/result" >Result</Link>
                  </motion.div>
                )}
              </AnimatePresence> */}
          </article>

          <div>
            <li
              className={`${
                openNavbar ? "visible" : "hidden"
              } hover:lg:bg-[#ECD337]  hover:lg:text-gray-950 lg:block lg:text-white text-white lg:h-8 lg:w-20 lg:text-center lg:flex lg:items-center lg:justify-center transition-all delay-400 duration-300`}
            >
              More
              {!openNavbar && <FaCaretDown />}
            </li>
          </div>

          <div>
            <li
              className={`${
                openNavbar ? "visible" : "hidden"
              } hover:lg:bg-[#ECD337]  hover:lg:text-gray-950 lg:block  lg:text-white text-white lg:h-8 lg:w-20 lg:text-center lg:flex lg:items-center lg:justify-center transition-all delay-400 duration-300 relative`}
            >
              {!openNavbar && <IoMdGlobe />}
              Solana
              {!openNavbar && <FaCaretDown />}
            </li>
          </div>
          {/* <div
          className={` ${
            openNavbar ? "visible" : "hidden"
          } w-full flex  lg:w-[20%] w-[30%] `}
        >
          <button className="bg-gradient-to-r from-blue-500 from-10% via-cyan-500 via-50% to-blue-500 to-70% text-black  border rounded-3xl  h-12 ">
            Connect Wallet
          </button>
        </div> */}
        </ul>

        <div
          className={`  flex justify-end  lg:w-[20%] w-[40%] fixed top-0 mt-4 right-0 lg:mr-20 mr-6 gap-x-2  items-center`}
        >
          <CiBellOn className="text-3xl"/>
          <IoSettingsOutline className="text-3xl"/>
          <button className="bg-gradient-to-r from-blue-500 from-10% via-cyan-500 via-50% to-blue-500 to-70% text-black w-full rounded-3xl  h-10 lg:text-sm  text-xs">
            Connect Wallet
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
