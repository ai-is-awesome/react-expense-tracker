import React, { useContext } from "react";
import AuthContext from "../Context/AuthContext";

export default function Logout() {
  const { signOut } = useContext(AuthContext);
  return (
    <button
      className="bg-red-500 px-4 py-2 rounded-md text-white"
      onClick={signOut}
    >
      Logout
    </button>
  );
}
