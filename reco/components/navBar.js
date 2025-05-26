import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="p-6  py-4">
      <nav className="rounded-full bg-[#D9D9D9] px-20 m-3.5 ">
        <ul className=" rounded-full flex justify-center gap-10 py-3 max-w-5xl mx-auto">
          <Link href="/">
            <li className="list-none font-bold text-[#000000] px-8 py-2">
              Home
            </li>
          </Link>
          <Link href="/service">
            <li className="list-none font-bold text-[#000000] px-8 py-2">
              Service
            </li>
          </Link>
          <Link href="/joinus">
            <li className="list-none font-bold text-[#A7CB4F] px-8 py-2">
              Join Us
            </li>
          </Link>
          <Link href="/contact-us">
            <li className="list-none font-bold text-[#000000] px-8 py-2">
              Contact
            </li>
          </Link>
          <Link href="/aboutus">
            <li className="list-none font-bold text-[#000000] px-8 py-2">
              About us
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
