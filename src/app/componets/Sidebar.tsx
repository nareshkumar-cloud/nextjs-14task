import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoMdContacts } from "react-icons/io";
import { MdFactCheck } from "react-icons/md";
import { AiFillThunderbolt } from "react-icons/ai";
import { IoBulb } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import TESLA from "../../img/TESLA.png";


const Sidear = () => {
  return (
    <aside className="w-72 h-screen bg-white text-black fixed top-0 left-0 flex flex-col shadow-lg rounded-xl mt-2">
    {/* Logo Section */}
    <div className="flex flex-col items-center justify-center h-16">
      <Image src={TESLA} alt="tesla-logo" width={80} height={40} />
    </div>

    {/* Sidebar Menu */}
    <div className="sidebar flex flex-col gap-2 p-3">
      <Link href="#">
        <div className="flex flex-col items-center justify-center h-16 hover:bg-blue-300 rounded-lg">
          <span className="flex items-center gap-2 text-xl">
            <FaArrowTrendUp />
            Reports
          </span>
        </div>
      </Link>
      <Link href="#">
        <div className="flex flex-col items-center justify-center h-16 hover:bg-blue-300 rounded-lg">
          <span className="flex items-center gap-2 text-xl">
            <AiFillThunderbolt />
            Library
          </span>
        </div>
      </Link>
      <Link href="#">
        <div className="flex flex-col items-center justify-center h-16 hover:bg-blue-300 rounded-lg">
          <span className="flex items-center gap-2 text-xl">
            <IoMdContacts />
            People
          </span>
        </div>
      </Link>
      <Link href="#">
        <div className="flex flex-col items-center justify-center h-16 hover:bg-blue-300 rounded-lg">
          <span className="flex items-center gap-2 text-xl">
            <MdFactCheck />
            Activities
          </span>
        </div>
      </Link>
      <Link href="#">
        <div className="flex flex-col items-center justify-center h-16 hover:bg-blue-300 rounded-lg">
          <span className="flex items-center gap-2 text-xl text-gray-400">
            Support
          </span>
        </div>
      </Link>
      <Link href="#">
        <div className="flex flex-col items-center justify-center h-16 hover:bg-blue-300 rounded-lg">
          <span className="flex items-center gap-2 text-xl">
            <IoBulb />
            Get Started
          </span>
        </div>
      </Link>
      <Link href="#">
        <div className="flex flex-col items-center justify-center h-16 hover:bg-blue-300 rounded-lg">
          <span className="flex items-center gap-2 text-xl">
            <IoMdSettings />
            Settings
          </span>
        </div>
      </Link>
    </div>
  </aside>
  )
}

export default Sidear
