import React from "react";

export default function TextInput({ placeholder, onChange, value }) {
  return (
    <input
      type="text"
      className="bg-gray-100 rounded-lg py-3 px-4 my-4 bg-blue-100"
      placeholder="Enter Amount"
      onChange={onChange}
      value={value}
    />
  );
}
