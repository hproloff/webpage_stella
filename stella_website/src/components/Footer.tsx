import React from "react";
import { Link } from "react-scroll";

const Footer: React.FC = () => {
  const date = new Date();
  return (
    <div className="flex flex-col" id="Section5">
      <div className="flex flex-col items-center rounded-t-xl justify-between w-full py-8 shadow-lg bg-gray-800 sm:px-10 sm:py-8 lg:space-y-0">
        <Link
          to="heroSection"
          smooth={true}
          offset={-110}
          duration={200}
          className="flex items-center space-x-3 cursor-pointer"
        >
          <h3 className="hidden text-2xl font-light text-white md:flex">
            Harrison<span className="font-semibold">Roloff</span>
          </h3>
        </Link>

        <span className="hidden text-base font-light text-white md:flex lg:text-lg">
          © {date.getFullYear()} All right reserved | Last Updated, Jan 10 2024
        </span>
        <span className="flex flex-col items-center space-y-2 text-sm font-normal text-white md:hidden">
          <span className="text-xs text-custom-lightGray">
            © {date.getFullYear()} All right reserved | Last Updated, Jan 10 2024
          </span>
          <span>
            <a href="#">Harrison Roloff</a>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
