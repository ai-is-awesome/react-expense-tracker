import clsx from "clsx";
import React from "react";
import Spinner from "../pages/Spinner";

export default function SmartButton({
  loading,
  buttonText,
  color,
  backgroundColor,
  spinnerType,
}) {
  const className = clsx(
    "px-20 py-3 text-center rounded-xl text-lg bg-purple-500 text-white",
    loading === true && "bg-purple-800",
    color || "text-white"
  );

  return (
    <button className={className} style={{ width: "75%" }} disabled={loading}>
      {loading === true ? (
        <Spinner
          spinnerType={"PulseLoader"}
          spinnerSize={"md"}
          spinnerColor={"white"}
        />
      ) : (
        buttonText
      )}
    </button>
  );
}
