import React from "react";

export default function Input({
  onChangeHandler,
  value,
  fontSize,
  placeholder,
}) {
  const fSize = fontSize === "large" ? "text-2xl" : "";
  const className = `bg-white rounded-lg py-3 px-4 my-4 shadow-sm  focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent ${fSize}`;

  return (
    <input
      type="text"
      className={className}
      placeholder={placeholder}
      onChange={onChangeHandler}
      value={value}
      style={{ minHeight: "0" }}
    />
  );
}
