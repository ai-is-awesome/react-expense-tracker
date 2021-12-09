import React from "react";

export default function Input({ onChangeHandler, value, size, placeholder }) {
  return (
    <input
      type="text"
      className="bg-white rounded-lg py-3 px-4 my-4 shadow-sm  focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      placeholder={placeholder}
      onChange={onChangeHandler}
      value={value}
    />
  );
}
