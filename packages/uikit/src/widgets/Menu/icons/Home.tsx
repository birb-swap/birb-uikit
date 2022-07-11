import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 48 48" {...props}>
      <style>
        {`.st0{fill:none;stroke-width:2;stroke-miterlimit:10}`}
      </style>
      <g id="House">
        <path
          className="st0"
          d="M35 47H13c-4.4 0-8-3.6-8-8V17L24 1l19 16v22c0 4.4-3.6 8-8 8z"
        />
        <path className="st0" d="M19 47L19 33 29 33 29 47" />
      </g>
    </Svg>
  );
};

export default Icon;
