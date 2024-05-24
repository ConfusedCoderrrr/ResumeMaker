"use client";
import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Image from "next/image";
import rsm from "../../public/img.png";
import step1 from "../../public/step1.png";
import step2 from "../../public/step2.png";
import step3 from "../../public/step3.png";
import final from "../../public/final.webp";

export default function Home() {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 5) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`fixed top-0 w-full z-30 ${
          collapsed ? "top-[calc(-90px)]" : ""
        } transition-top duration-300 ease-in-out`}
      >
        <Navbar />
      </div>
      <div className="mt-[90px] h-[70vh] py-10 flex justify-between bg-slate-100 shadow-md relative">
        <div className="absolute left-[15%] mt-24 flex-col gap-7">
          <div className="text-3xl font-bold text-[#24305E]">
            Fast. Easy. Effective.
          </div>
          <div className="text-5xl mt-4 font-bold text-black">
            Best Resume Maker
          </div>
          <div className="text-5xl mt-4 font-bold text-black">
            Present Online.
          </div>
          <div className="mt-4 font-bold text-black max-w-[500px]">
            If a sheet of paper represents your entire work life, personality,
            and skills, it better be a pretty amazing piece of paper — Let Zety
            do the heavy lifting.
          </div>
          <div className="mt-8">
            <button className="px-6 py-2 text-white bg-[#24305E] rounded-full hover:bg-[#3e486d] text-lg font-bold">
              Create Your Resume....
            </button>
          </div>
        </div>
        <div>
          <Image
            src={rsm}
            height={612}
            className="rounded-t-lg border-gray-400 border-2 border-b-0 z-20 absolute right-[15%]"
          />
        </div>
      </div>
      <div>
        <div className="flex mx-[10%] my-28 justify-around">
          <div className="flex-col gap-10">
            <Image src={step1} />
            <div className="text-center font-semibold text-2xl mt-3">
              Pick a resume Template.
            </div>
            <div className="text-center mt-3">
              Choose a sleek design and layout to get started.
            </div>
          </div>
          <div className="flex-col gap-10">
            <Image src={step2} />
            <div className="text-center font-semibold text-2xl mt-3">
              Fill the details.
            </div>
            <div className="text-center mt-3">
              Fill all the important details as per requirement
            </div>
          </div>
          <div className="flex-col gap-10">
            <Image src={step3} />
            <div className="text-center font-semibold text-2xl mt-3">
              Customize your document.
            </div>
            <div className="text-center mt-3">
              Make it truly yours. Uniqueness in a few clicks.
            </div>
          </div>
        </div>
      </div>
      <div className="px-[18%] flex py-10">
        <Image src={final} />
        <div className="flex-col mt-20">
          <div className="ml-20 text-4xl font-semibold">
            Build your resume. Build your life.
          </div>
          <div className="ml-20 mt-4 text-lg">
            - Stand out from the crowd with professionally designed templates.
          </div>
          <div className="ml-20 mt-2 text-lg">
            - Showcase your skills and achievements in a visually appealing
            format.
          </div>
          <div className="ml-20 mt-2 text-lg">
            - Get noticed by recruiters and land your dream job faster.
          </div>
          <div className="ml-20 mt-12 text-lg">
            <button className="px-6 py-2 text-white bg-[#24305E] rounded-full hover:bg-[#3e486d] text-lg font-bold">
              Create Your Resume....
            </button>
          </div>
        </div>
      </div>
      <div className="h-[40vh] flex bg-gradient-to-br from-[#24305E] items-center justify-center to-indigo-600">
        <div className="flex-col items-center justify-center">
          <div className="text-[#f76c6c] max-w-[80%] text-4xl font-bold text-center">
            Try our premium service with unlimited credits.
          </div>
          <div className="text-white">
            click the link below to buy more credits.
          </div>
          <div>
            <button className="px-6 py-2 text-white bg-[#24305E] rounded-full hover:bg-[#3e486d] text-lg font-bold">
              Buy credits....
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
