import React from "react";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between p-6 mb-12 bg-gray-100 shadow-md ">
      <div className="flex flex-row items-center">
        <div className="mr-4">LOGO</div>
        <div className="text-4xl uppercase tracking-wider">Money Manager</div>
      </div>
      <div className="flex flex-row items-center">
        <FaUserCircle
          style={{ width: "40px", height: "40px", color: "#79776a" }}
        />
      </div>
    </div>
  );
}
