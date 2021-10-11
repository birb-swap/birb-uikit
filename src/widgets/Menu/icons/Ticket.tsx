import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 48 48" {...props}>
      <style>
        {`.st0{fill:none;stroke-width:2;stroke-miterlimit:10}`}
      </style>
      <g id="Money">
        <path className="st0" d="M1 15H41V39H1z" />
        <path className="st0" d="M7 15L7 9 47 9 47 33 41 33" />
        <circle className="st0" cx={21} cy={27} r={6} />
      </g>
    </Svg>
  );
};

export default Icon;
