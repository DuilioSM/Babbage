import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import HeaderLogo from "../assets/Header-logo.png";

function Header() {
  const [showNav, setShowNav] = useState(false);
  return (
    <header className="flex w-full h-[10vh] px-5 py-8 sticky top-0 z-20 bg-offWhite shadow-item md:px-20 ">
      <nav className="flex w-full justify-between items-center md:flex">
        <div className="sticky w-full top-0 z-20 flex items-center justify-between">
          <img className="md:h-14 h-10" alt="Babbage" src={HeaderLogo} />
          {showNav ? (
            <HiOutlineMenuAlt3
              onClick={() => setShowNav(!showNav)}
              className="md:hidden block h-16 w-16 cursor-pointer"
            />
          ) : (
            <HiOutlineMenuAlt2
              onClick={() => setShowNav(!showNav)}
              className="md:hidden block h-16 w-16 cursor-pointer"
            />
          )}
        </div>
        <ul
          className={
            (showNav ? "left-0" : "-left-full") +
            "  transition-left fixed justify-start bottom-0 top-[10vh] bg-grayText bg w-9/12 text-white space-y-5 p-5 shadow-item md:shadow-none md:static md:flex md:space-y-0 md:text-black md:bg-transparent md:w-auto md:space-x-3 md:items-center"
          }
        >
          <li className="hover:underline decoration-highRed decoration-4 text-xl md:text-base">
            <Link to="/projects">Proyectos</Link>
          </li>
          
          <li>
            <Link to="/">
              <button className="h-fit px-6 py-3 text-highRed  rounded-lg border-2 border-highRed hover:bg-highRed hover:text-white active:bg-white active:text-highRed">
                Inicio
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
