import React from "react";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between p-6 mb-12   ">
      <div className="flex flex-row items-center">
        <div className="mr-4">LOGO</div>
        <div className="text-4xl uppercase tracking-wider">Money Manager</div>
      </div>
      <div className="flex flex-row items-center">
        <FaUserCircle
          className="text-indigo-700"
          style={{ width: "50px", height: "50px", cursor: "pointer" }}
        />
      </div>
    </div>
  );
}
