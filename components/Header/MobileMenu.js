import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { BiLogOut } from "react-icons/bi";
import { UserAuth } from "@/app/context/AuthContext";
const MobileMenu = ({ isOpen, onClose }) => {
  const { logOut } = UserAuth();

  const menuItems = [
    { href: "/business", label: "Business" },
    { href: "/health", label: "Health" },
    { href: "/science&tech", label: "Science & Tech" },
    { href: "/sports", label: "Sports" },
  ];

  if (!isOpen) {
    return null;
  }

  const handleSignOut = async (event) => {
    try {
      await logOut();
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div
      className="container bg-opacity-75 mx-auto m-2"
      style={{ backgroundColor: "#dfdfdf", borderRadius: "10px" }}
    >
      <div className="flex flex-col  justify-start h-full text-black mx-auto">
        <ul>
          <li>
            {menuItems.map((item, index) => (
              <Link
                href={item.href}
                key={item.href}
                style={{ borderRadius: "20px" }}
              >
                <p
                  className="text-2xl m-2 hover:text-gray-300"
                  onClick={onClose}
                >
                  {item.label}
                </p>
                {index < menuItems.length - 1 && (
                  <hr className="border-gray-400" />
                )}
              </Link>
            ))}
          </li>
        </ul>
        <button
          className="text-2xl flex justify-center m-2 hover:text-gray-300"
          onClick={handleSignOut}
        >
          <BiLogOut />
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
