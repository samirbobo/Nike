import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

export default function Nav() {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} width={129} height={29} alt="Logo" />
        </a>
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
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
        <div className="lg:hidden">
          <img src={hamburger} width={25} height={25} alt="hamburger" />
        </div>
      </nav>
    </header>
  );
}
