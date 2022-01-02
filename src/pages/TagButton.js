import React from "react";
import clsx from "clsx";

export default function TagButton({
  tagName,
  textColor,
  backgroundColor,
  isPointer,
  onClickHandler,
  style,
}) {
  const classes = clsx(
    "mr-2 mb-2 rounded-lg px-2 py-1 mb-2",
    textColor,
    backgroundColor ? backgroundColor : "bg-green-400",
    isPointer === false ? "cursor-auto" : "cursor-pointer"
  );
  return (
    <button
      className={classes}
      style={{ minWidth: "100px" }}
      onClick={onClickHandler}
      style={style}
      type="button"
    >
      {tagName}
    </button>
  );
}
