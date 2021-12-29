import React, { useState } from "react";
import SyncLoader from "react-spinners/SyncLoader";
import { css } from "@emotion/react";
import TagButton from "./TagButton";

export default function Spinner({
  spinnerType,
  spinnerColor,
  spinnerSize,
  customCss,
}) {
  const override = css`
    display: block;
    margin: 50px auto;
  `;
  const [loading, setloading] = useState(true);
  let [color, setColor] = useState("rgb(168, 85, 247)");

  if (spinnerType === "BeatLoader") {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <SyncLoader color={color} loading={loading} css={override} size={15} />
      </div>
    );
  } else if (spinnerType === "PulseLoader") {
    return <div>Pulse Loader</div>;
  }
}
