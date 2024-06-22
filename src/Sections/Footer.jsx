import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

export default function Footer() {
  return (
    <footer className="bg-black  padding-x padding-t pb-8">
      <div className="max-container flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div>
          <a href="/">
            <img
              src={footerLogo}
              alt="logo"
              width={150}
              height={46}
              className="m-0"
            />
          </a>
          <p className="text-base leading-7 font-montserrat text-white-400 sm:max-w-sm mt-6">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>

          <div className="flex items-center mt-8 gap-5">
            {socialMedia.map((social) => (
              <div
                key={social.alt}
                className="flex justify-center items-center bg-white w-12 h-12 rounded-full"
              >
                <img src={social.src} alt={social.alt} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((links) => (
            <div key={links.title}>
              <h3 className="text-white text-2xl font-montserrat leading-normal font-medium mb-8">
                {links.title}
              </h3>
              <ul>
                {links.links.map((link) => (
                  <li
                    className="font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray my-2"
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="max-container text-white-400 mt-24 max-sm:flex-col max-sm:items-center flex justify-between">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat">
          <img
            src={copyrightSign}
            alt="copyright icon"
            width={24}
            height={24}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
}
