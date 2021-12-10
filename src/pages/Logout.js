import React, { useContext } from "react";
import AuthContext from "../Context/AuthContext";

export default function Logout() {
  const { signOut } = useContext(AuthContext);
  return (
    <button className="" onClick={signOut}>
      Logout
    </button>
  );
}
