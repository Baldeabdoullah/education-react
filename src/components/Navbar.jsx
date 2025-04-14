import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-row items-center justify-around py-3">
        {/* logo */}
        <a href="#">
          <img src={logo} alt="" />
        </a>

        {/* desktop menu */}
        <div className="  hidden md:flex flex-row items-center space-x-7 text-md ">
          <a href="#">
            <NavLink to="/">Accueil</NavLink>
          </a>
          <a href="#">
            <NavLink to="/about">A Propos</NavLink>
          </a>

          <a href="#">Service</a>
          <a href="#">
            <NavLink to="/blog">Blog</NavLink>
          </a>

          <a href="#">Contact</a>
        </div>

        {/* button */}

        <button className="bg-[#151317]  hover:bg-[#FFA600] transition ease-in-out delay-100 font-semibold text-white py-5 px-4 rounded-2xl">
          Commencons
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
