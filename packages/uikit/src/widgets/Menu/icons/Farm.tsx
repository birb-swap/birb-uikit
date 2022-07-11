import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 48 48" {...props}>
      <style>
        {`.st0{fill:none;stroke-width:2;stroke-miterlimit:10}`}
      </style>
      <g id="Truck">
        <path
          className="st0"
          d="M41.5 37H43c2.3 0 4.1-1.9 4-4.1v-.3L45.5 15h-11l-1 14h-4l-1.3-14.7c-.4-4.1-3.8-7.3-8-7.3H1v28l8 2"
        />
        <path className="st0" d="M19 37L31.5 37" />
        <circle className="st0" cx={14} cy={37} r={5} />
        <circle className="st0" cx={36.5} cy={37} r={5} />
        <path className="st0" d="M46.5 25L39 25 39 15" />
      </g>
    </Svg>
  );
};

export default Icon;
