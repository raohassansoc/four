"use client";
import Image from "next/image";
import React from "react";
import Logo from "../../../public/images/logo.png";
import tradeImg from "../../../public/images/four-trade.svg";
import sideTrade from "../../../public/images/side-trade.svg";
import pic1 from "../../../public/images/four-1.svg";
import pic2 from "../../../public/images/four-2.svg";
import pic3 from "../../../public/images/four-3.svg";

const page = () => {
  return (
    <div className="bg-black w-full h-full relative">
      <div className="flex justify-between p-6">
        <div className="flex items-center">
          <Image src={Logo} width={50} height={50} />
          <div className="text-white text-4xl ml-4 font-medium"> Trade3</div>
        </div>
        <div className="flex items-center gap-6 text-[#a6a6a6]">
          <div className="text-base font-medium max-sm:hidden cursor-pointer hover:text-white">
            Blog
          </div>
          <div className="text-base font-medium max-sm:hidden cursor-pointer hover:text-white">
            Careers
          </div>
          <div className="text-base font-medium max-sm:hidden cursor-pointer hover:text-white">
            Sign in
          </div>
          <button
            className="bg-[white] text-[black] py-[0.5rem]
           px-[1.25rem] rounded-[0.5rem] font-medium hover:bg-[#6f8eff]"
          >
            Get Access
          </button>
        </div>
      </div>
      <div className="py-20 text-center text-white w-[613px] m-auto max-sm:w-[100%]">
        <p className="text-[40px] font-bold leading-[45px] mb-4">
          Build your dream site without the hassle of coding 🔥
        </p>
        <p className="text-[16px] text-[#ADADAD]">
          No coding skills needed. Build your dream website hassle-free,
          enjoying a seamless and efficient process that saves time and effort.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <button
            className="py-3 px-5 rounded-2xl bg-white text-black text-lg font-semibold
           hover:bg-[#6f8eff]"
          >
            Conect Wallet
          </button>
          <button
            className="py-3 px-5 rounded-2xl text-lg font-semibold border border-white
           hover:bg-[#adadad]"
          >
            Explore More
          </button>
        </div>
      </div>
      <div className="m-auto w-max">
        <Image
          src={tradeImg}
          className="w-[722px] h-[390px] max-[750px]:w-[318px] max-[750px]:h-[175px]"
        />
      </div>
      {/*  */}
      <div className="flex items-center max-[964px]:flex-wrap p-8 m-12 bg-[#101010] rounded-2xl">
        <div className="w-[50%] max-[964px]:w-[100%] flex items-center">
          <div className="px-2">
            <p className="text-[#6f8eff] text-center text-lg">Seamless</p>
            <p className="text-[40px] font-bold leading-[45px] mb-4 text-white">
              Transform your website with seamless simplicity
            </p>
            <p className="text-[16px] text-[#ADADAD]">
              Storm Framer Template empowers you to create a successful online
              presence, offering all the essential elements you need to
              captivate your desired customers.
            </p>
          </div>
        </div>
        <div className="w-[50%] max-[964px]:w-[100%]">
          <Image src={sideTrade} className="max-[964px]:w-[100%]" />
        </div>
      </div>
      <div>
        <p className="text-[#6f8eff] text-center text-lg">Features</p>
        <p className="text-[40px] font-bold leading-[45px] mb-4 text-white text-center">
          Give life to your business.
        </p>
        <p className="text-[16px] text-[#ADADAD] text-center">
          Build your dream website hassle-free, enjoying a seamless process.
        </p>
        <div className="flex my-4 max-[914px]:flex-wrap">
          <div className="w-[33.33%] max-[914px]:w-[50%] max-[480px]:w-[100%] p-2">
            <div className="bg-[#101010] rounded-3xl p-6">
              <Image src={pic2} className="w-[335px] h-[140px] m-auto" />
              <p className="text-white mt-2 text-center text-lg font-semibold">
                Always available.
              </p>
              <p className="text-[#ADADAD] text-center text-sm">
                Create, craft and share stories together with real time
                collabration.
              </p>
            </div>
          </div>
          <div className="w-[33.33%] max-[914px]:w-[50%] max-[480px]:w-[100%] p-2">
            <div className="bg-[#101010] rounded-3xl p-6">
              <Image src={pic1} className="w-[335px] h-[140px] m-auto" />
              <p className="text-white mt-2 text-center text-lg font-semibold">
                Actionable insights.
              </p>
              <p className="text-[#ADADAD] text-center text-sm">
                Measure and optimize performance. Uncover valuable data.
              </p>
            </div>
          </div>
          <div className="w-[33.33%] max-[914px]:w-[50%] max-[480px]:w-[100%] p-2">
            <div className="bg-[#101010] rounded-3xl p-6">
              <Image src={pic3} className="w-[335px] h-[140px] m-auto" />
              <p className="text-white mt-2 text-center text-lg font-semibold">
                Efficient workflows.
              </p>
              <p className="text-[#ADADAD] text-center text-sm">
                Boost productivity with keyboard shortcuts. Work smarter and
                faster.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-white py-2 bg-[#101010] text-sm ">
        Copy Right @2023
      </div>
    </div>
  );
};

export default page;
