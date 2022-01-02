import userEvent from "@testing-library/user-event";
import React, { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { BsBarChartLineFill } from "react-icons/bs";

import { useState } from "react";
import AuthContext from "../Context/AuthContext";
import Logout from "./Logout";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showUserProfile, setShowUserProfile] = useState(false);
  const { user } = useContext(AuthContext);
  return (
    <div className="flex flex-row justify-between w-full p-6 sticky top-0 bg-gray-100">
      <div className="flex flex-row items-center">
        <div className="mr-4">LOGO</div>
        <div className="text-4xl font-extrabold text-purple-500 uppercase tracking-wider">
          <Link to="/">Expense Tracker</Link>
        </div>
      </div>
      <div className="flex flex-row items-center">
        {user !== null && (
          <div className="flex flex-col relative">
            <FaUserCircle
              className="text-indigo-700"
              style={{ width: "50px", height: "50px", cursor: "pointer" }}
              onClick={() =>
                setShowUserProfile((previousValue) => !previousValue)
              }
            />
            {showUserProfile && (
              <div
                className="shadow-md px-12 py-8 absolute"
                style={{ left: "-200px", top: "60px" }}
              >
                <div>Welcome {user.email}</div>
                <Logout />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
