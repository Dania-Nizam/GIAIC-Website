import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div
      className="relative z-0 w-full overflow-hidden bg-cover"
      style={{ backgroundImage: "url(/bg.png)" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 -z-30 h-full w-full bg-zinc-100 bg-opacity-80"></div>

      {/* Content */}
      <div className="z-10 flex flex-wrap justify-center md:justify-end items-center md:items-end h-full text-center md:text-left">
        <div className="max-w-full p-4 md:p-0">
          <h2 className="font-bold pt-[50px] md:pt-[100px] text-[30px] md:text-[50px] text-[#044E83]">
            Governor Sindh
          </h2>
          <h2 className="text-[#044E83] text-[25px] md:text-[35px] mt-2 md:mt-0">
            Kamran Khan Tessori
          </h2>
          <div className="mb-[20px]">
            <h3 className="text-[#2EB6E8] text-[20px] md:text-[30px] mt-[10px] md:mt-[20px] font-extrabold">
              Certified Cloud
            </h3>
            <h3 className="text-[#2EB6E8] text-[20px] md:text-[30px] font-extrabold">
              Applied Generative AI
            </h3>
            <h3 className="text-[#2EB6E8] text-[20px] md:text-[30px] font-extrabold">
              Engineer (GenEng)
            </h3>
          </div>
          <div>
            <p className="text-[#044E83] text-[16px] md:text-[20px] font-extrabold">
              Earn up to 55,000 / month
            </p>
            <p className="text-[#044E83] text-[16px] md:text-[20px] font-extrabold">
              Now admissions are open in <br />
              Hyderabad
            </p>
          </div>
          <br />
          <div className="flex flex-col md:flex-row gap-5 md:gap-10 mb-[50px] md:mb-[90px] items-center">
            <Link
              href="/apply"
              className="bg-[#044E83] rounded-lg p-3 text-white font-bold text-[15px] text-center w-[150px]"
            >
              <button className="text-center rounded-xl w-full">
                APPLY NOW
              </button>
            </Link>
            <button className="text-slate-400 text-[14px] md:text-[15px] font-semibold">
              <span className="text-[#044E83] text-[18px] md:text-[20px] font-extrabold">
                562,143
              </span>
              <br />
              Accepted Applications
            </button>
          </div>
        </div>
        <div className="img pt-[30px] flex justify-center md:justify-end w-full md:w-auto">
          <Image
            src="/pi.png"
            alt=""
            width={700}
            height={800}
            className="h-[300px] md:h-[600px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
