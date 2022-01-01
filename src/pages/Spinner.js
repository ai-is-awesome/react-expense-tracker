import React, { useState } from "react";
import SyncLoader from "react-spinners/SyncLoader";
import PulseLoader from "react-spinners/PulseLoader";
import { css } from "@emotion/react";
import TagButton from "./TagButton";

export default function Spinner({
  spinnerType,
  spinnerColor,
  spinnerSize,
  customCss,
  displayType,
}) {
  const defaultCssString = `
  display: block;
  margin: 50px auto;
`;
  const cssString = customCss ? customCss + defaultCssString : defaultCssString;
  const override = css(cssString);
  const [loading, setloading] = useState(true);
  let [color, setColor] = useState("rgb(168, 85, 247)");
  let size;
  let margin;

  if (spinnerType === "BeatLoader") {
    if (spinnerSize === "sm") {
      size = 10;
      margin = 1;
    }
    if (spinnerSize === "md") {
      size = 15;
      margin = 2;
    }
    if (spinnerSize == "lg") {
      size = 24;
      margin = 3;
    }
    if (spinnerSize === "xl") {
      size = 30;
      margin = 5;
    }
    return (
      <div className="flex flex-col">
        <SyncLoader
          color={color}
          loading={loading}
          size={size}
          margin={margin}
        />
      </div>
    );
  } else if (spinnerType === "PulseLoader") {
    if (spinnerSize === "sm") {
      size = 10;
      margin = 2;
    }
    if (spinnerSize === "md") {
      size = 20;
      margin = 5;
    }
    if (spinnerSize === "lg") {
      size = 30;
      margin = 10;
    }
    return <PulseLoader size={size} color={color} />;
  } else {
    return <div>Spinner....</div>;
  }
}
