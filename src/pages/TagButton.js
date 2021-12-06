import React from "react";

export default function TagButton({ tagName, textColor, backgroundColor }) {
  return (
    <button className="bg-green-400 mr-2 rounded-lg px-2 py-1 mb-2">
      {tagName}
    </button>
  );
}
