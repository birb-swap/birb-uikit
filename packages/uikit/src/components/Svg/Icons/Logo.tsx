import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 223 223" {...props}>
      <image width="223" height="223" href='/images/custom/logo.png' />
    </Svg>
  );
};

export default Icon;
