import React, { useState, useEffect, useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "./../assets/react.svg";


export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <header
      className={`${
        isActive ? "bg-transparent py-4" : "bg-white py-6 shadow-md"
      } fixed w-full z-10 transition-all`}
    >

      {/* arreglar width. no entiendo por qué el container lo limita en wide  sacar container y ponerlo manualmente*/}
      <div className="container mx-auto flex items-center justify-between h-full">
        {/* Logo */}
        <Link to={"/"}>
          <div>
            <img className="w-[40px]" src={Logo} alt="logo" />
          </div>
        </Link>
        {/* cart */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative"
        >
          <BsBag className="text-2xl" />
          <div className="bg-sky-600 absolute -right-0 md:-right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};
