import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import darkLogo from "../img/dark.png"
import { MdArrowDropDown } from "react-icons/md";
export default function Navbar({ handlePage }) {
  const [burger, setBurger] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const node = useRef();
  const handleClickOutside = (event) => {
    if (node.current && !node.current.contains(event.target)) {
      setBurger(false);
    }
  };
  useEffect(() => {
    if (burger) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [burger]);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setBurger(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div>
      <nav className='fixed w-full top-0 bg-white z-30 shadow-2xl'>
        <div className=' container mx-auto max-auto-7xl flex justify-between px-4 h-24 '>
        <Link to="/" className="flex items-center py-6 px-3 text-gray-700 ">
                <img src={darkLogo} alt="Logo" className="h-16 w-16 mr-3" />
                <span className="font-bold text-lg ">
                  İlkesel İleri Teknoloji
                  <br /> İletişim Hizmetleri
                </span>
              </Link>
          <div className='gap-2 hidden md:flex'>
            <Link to={"/"} className={`px-2 flex items-center`} >Anasayfa</Link>
           <div className=' flex items-center relative'> 
           <Link to={"/hizmetlerimiz"} className={`px-2 flex items-center `}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}>Hizmetlerimiz</Link>
              {isDropdownOpen && (
                <div
                  className="absolute  z-30 -right-9 top-14 w-48 bg-white shadow-lg rounded-lg  pt-8 pb-4"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}>
                  <a
                    href="/enerji"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    ENERJİ
                  </a>
                  <a
                    href="/ges"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    GES
                  </a>
                  <a
                    href="/kgys_kurumlari"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    KGYS KURULUMLARI
                  </a>
                  <a
                    href="/pts-eds"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    PTS-EDS
                  </a>
                  <a
                    href="/referanslar"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    REFERANSLAR
                  </a>
                </div>
              )}
              </div>
            <Link to={"/iletisim"} className={`px-2 flex items-center `} >İletişim</Link>
            <Link to={"/kurumsal"} className={`px-2 flex items-center `} >Kurumsal</Link>
         
          </div>
         
          <div className='items-center flex md:hidden'><span className='cursor-pointer' onClick={() => setBurger(!burger)}>{!burger ? <GiHamburgerMenu size={28} /> : <IoCloseSharp size={30} />}</span></div>
        </div>
      </nav>
      {burger && <div className='fixed top-24 z-30 bg-zinc-900 opacity-60 left-0 right-0 bottom-0'></div>}
      <div ref={node} className={`fixed z-40 top-24 right-0 bottom-0 text-xl bg-white transition-all ease-linear delay-100 ${burger ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='flex flex-col gap-2'>
          <Link to={"/"} className={`p-2 flex items-center `} onClick={()=>setBurger(false)}>Anasayfa</Link>
         <div className=''> 
         <Link to={"/hizmetlerimiz"} className={`p-2 flex items-center  `} onClick={()=>setIsDropdownOpen(!isDropdownOpen)}>Hizmetlerimiz <MdArrowDropDown /></Link>
         {isDropdownOpen && (
                <div
                  className="text-sm z-30 -right-9 top-14 w-48 bg-white shadow-lg rounded-lg  pt-8 pb-4">
                  <a
                    href="/enerji"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    ENERJİ
                  </a>
                  <a
                    href="/ges"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    GES
                  </a>
                  <a
                    href="/kgys_kurumlari"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    KGYS KURULUMLARI
                  </a>
                  <a
                    href="/pts-eds"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    PTS-EDS
                  </a>
                  <a
                    href="/referanslar"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    REFERANSLAR
                  </a>
                </div>
              )}
         </div>
          <Link to={"/iletisim"} className={`p-2 flex items-center `} onClick={()=>setBurger(false)}>İletişim</Link>
          <Link to={"/kurumsal"} className={`p-2 flex items-center `} onClick={()=>setBurger(false)}>Kurumsal</Link>
        </div>
      </div>
    </div>
  );
}
