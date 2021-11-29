import React, { useState, useEffect } from "react";
import { BiErrorCircle } from "react-icons/bi";

export default function Message({ message, type, size }) {
  return (
    <div className="bg-red-500 text-white rounded-md pl-5 pr-6 py-1 my-4 flex flex-row items-center justify-center">
      <span className="px-1">
        <BiErrorCircle style={{ fontSize: "20px", padding: 0 }} />
      </span>
      <span>{message}</span>
    </div>
  );
}
