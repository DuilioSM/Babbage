import React, { useState,useEffect,useRef } from "react";
import gsap, { Power2 } from "gsap";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import HeaderLogo from "../assets/Header-logo.png";

function Header() {
  //Show slide bar header in mobile device
  const [showNav, setShowNav] = useState(false);

  //Logic of gsap
  let headerItem = useRef(null);
  let navImageItem = useRef(null);
  let navItem = useRef(null);

  useEffect(()=>{
    gsap.from(headerItem, {
      duration: 1.5,
      opacity: 0,
      y: -80,
      ease: Power2.easeOut,
    });
    gsap.from(navImageItem, {
      duration: 1.5,
      opacity: 0,
      ease: Power2.easeOut,
      delay:.5
    });
    gsap.from(navItem, {
      duration: 1.5,
      opacity: 0,
      ease: Power2.easeOut,
      delay:.5
    });
  },[])

  return (
    <header ref={el =>{headerItem = el}} className="flex w-full h-[10vh] px-5 py-8 sticky top-0 z-20 bg-offWhite shadow-item md:px-20 ">
      <nav className="flex w-full justify-between items-center md:flex">
        <div ref={el =>{navImageItem = el}} className="sticky w-full top-0 z-20 flex items-center justify-between">
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
        ref={el =>{navItem = el}}
          className={
            (showNav ? "left-0" : "-left-full") +
            "  transition-left fixed justify-start bottom-0 top-[10vh] bg-grayText opacity-90 bg w-3/4 text-white space-y-5 p-5 shadow-item md:shadow-none md:static md:flex md:space-y-0 md:text-black md:bg-transparent md:w-auto md:space-x-3 md:items-center"
          }
        >
          <li className="hover:underline decoration-highRed decoration-4 text-2xl active:text-highRed md:text-base">
            <Link to="/projects">Proyectos</Link>
          </li>
          
          <li>
            <Link to="/">
              <button className="h-fit hover:underline decoration-highRed md:active:decoration-white decoration-4 md:active:text-highRed text-2xl rounded-lg  border-highRed md:hover:bg-highRed md:hover:text-white  md:active:bg-white active:text-highRed md:border-2 md:py-3 md:px-6 md:text-highRed md:text-base">
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
