"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-wrap sm:flex-nowrap justify-between items-center relative w-full bg-[#044E83] text-white h-auto sm:h-20 rounded-r rounded-e p-4 sm:p-0">
      {/* Logo Section */}
      <div className="absolute sm:relative bottom-[-40px] sm:bottom-auto left-5 z-10 pt-[25px]">
        <Image
          src="/logo.png"
          alt="logo"
          width={70}
          height={113}
          className="object-contain w-[70px] sm:w-[80px] md:w-[90px]"
        />
      </div>

      {/* Title Section */}
      <div className="w-full sm:w-auto text-center mt-12 sm:mt-0">
        <h1 className="text-[16px] sm:text-[23px] text-blue-200">
          Tuition Free Education Program on Latest Technologies
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="w-full sm:w-auto mt-4 sm:mt-0">
        <ul className="flex flex-wrap justify-center sm:justify-end text-white gap-4 text-[14px] sm:text-[16px]">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Apply</Link>
          </li>
          <li>
            <Link href="/">Jobs</Link>
          </li>
          <li>
            <Link href="/">Result</Link>
          </li>
          <li>
            <Link href="/">Courses</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

