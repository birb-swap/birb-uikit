import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 48 48" {...props}>
      <style>
        {`.st0{fill:none;stroke-width:2;stroke-miterlimit:10}`}
      </style>
      <g id="Plates">
        <ellipse className="st0" cx={24} cy={16} rx={23} ry={11} />
        <path
          className="st0"
          d="M7 18c0-4.4 7.6-8 17-8s17 3.6 17 8M47 23c0 6.4-10.3 12-23 12S1 29.4 1 23"
        />
        <path className="st0" d="M47 31c0 6.3-10.3 12-23 12S1 37.3 1 31" />
      </g>
    </Svg>
  );
};

export default Icon;
