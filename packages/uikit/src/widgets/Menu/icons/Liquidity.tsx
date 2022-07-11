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
        <circle className="st0" cx={24} cy={24} r={23} />
        <path
          className="st0"
          d="M30.5 12.9c-1.8-1.2-3.9-1.8-6-1.9-3.3 0-6.4 2.8-6.4 5.6 0 2.9 2.1 5.3 6.4 7.1 4.9 2.1 6.5 4 6.5 7.1 0 4-4 6.1-7.5 6.1-2.3 0-4.6-.7-6.5-2"
        />
        <path className="st0" d="M26 6.5L22 41.5" />
      </g>
    </Svg>
  );
};

export default Icon;
