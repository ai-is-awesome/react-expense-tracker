import React from "react";

export default function TagButton({ tagName }) {
  return (
    <button className="bg-gray-100 mr-2 rounded-lg px-2 py-1 mb-2">
      {tagName}
    </button>
  );
}
