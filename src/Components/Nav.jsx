import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";

export default function Nav() {
  const [navToggle, setNavToggle] = useState(false);

  const handleNavToggle = () => {
    setNavToggle(!navToggle);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="relative flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} width={129} height={29} alt="Logo" />
        </a>
        <ul className={`nav-links ${navToggle ? "max-lg:p-4 h-auto" : ""}`}>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal hover:text-coral-red transition duration-200 text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex text-lg font-montserrat font-medium leading-normal gap-2 max-lg:hidden wide:mr-24">
          <a href="/" className="text-[#ff6452]">
            Sign in
          </a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>
        <div className="lg:hidden cursor-pointer" onClick={handleNavToggle}>
          <img src={hamburger} width={25} height={25} alt="hamburger" />
        </div>
      </nav>
    </header>
  );
}
