import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 48 48" {...props}>
      <style>
        {`.st0{fill:none;stroke-width:2;stroke-miterlimit:10}`}
      </style>
      <g id="Sync">
        <path
          className="st0"
          d="M5 17c4.4-5.4 8.6-12 19.1-12C34.5 5 43 13.5 43 24"
        />
        <path className="st0" d="M5 7L5 17 15 17" />
        <path
          className="st0"
          d="M43 31c-4.4 5.2-8.6 12-19.1 12C13.4 43 5 34.5 5 24.1V24"
        />
        <path className="st0" d="M43 41L43 31 33 31" />
      </g>
    </Svg>
  );
};

export default Icon;
