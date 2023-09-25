"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import image from "./logo.png";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { Menu } from "react-feather";
import { UserAuth } from "@/app/context/AuthContext";

export default function Header() {
  
  const { logOut } = UserAuth();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleSignOut = async (event) => {
    try {
      await logOut();
    } catch (error) {
      console.log("error", error);
    }
  };
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header
        className="container px-5 py-2 mx-auto"
        style={{ backgroundColor: "#dfdfdf", borderRadius: "10px" }}
      >
        <div className=" flex items-center justify-between  ">
          <div className="flex items-center  gap-4">
            <Link href="/">
              <p className="text-black text-xl font-semibold">Media Magnet</p>
            </Link>
            <Image src={image} alt="yujujm" width={70} height={70} />
          </div>
          <div className="md:hidden">
            <button className="text-black text-2xl" onClick={toggleMenu}>
              <Menu />
            </button>
          </div>
          <div className="hidden md:flex space-x-4 text-xl lg:text-2xl gap:2 lg:gap-4">
            <Link href="/business">
              <p className="text-black hover:text-gray-500 hover:underline">
                Business
              </p>
            </Link>
            <Link href="/health">
              <p className="text-black hover:text-gray-500 hover:underline">
                Health
              </p>
            </Link>
            <Link href="/science&tech">
              <p className="text-black hover:text-gray-500 hover:underline">
                Science & Tech
              </p>
            </Link>
            <Link href="/sports">
              <p className="text-black hover:text-gray-500 hover:underline">
                Sports
              </p>
            </Link>
            <button onClick={handleSignOut}>LogOut</button>
          </div>
        </div>
      </header>
      <MobileMenu isOpen={menuOpen} onClose={toggleMenu} />
    </>
  );
}
