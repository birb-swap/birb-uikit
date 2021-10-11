import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 56 48" {...props}>
      <style>
        {`.st0{fill:none;stroke-width:2;stroke-miterlimit:10}`}
      </style>
      <g id="Users">
        <path
          className="st0"
          d="M26.7 12.4c.1-4-3.2-7.4-7.2-7.4h-.3c-4.1 0-7.7 3.3-7.5 7.4 0 .8.8 5 .8 5 .6 3.6 3 6.6 6.7 6.6s6-3 6.7-6.6c0 0 .8-4.1.8-5zM37.7 43H.7l.6-7.2c.3-2.7 3.1-4.6 5.9-5.1l12-1.6 12.1 1.6c3.1.6 5.8 2.3 6 5.4l.4 6.9zM46.2 17.4c0-3.3-2.7-6-6-6s-6 2.7-6 6c0 .7.7 3.9.7 3.9.5 2.8 2.4 5.2 5.3 5.2s4.8-2.4 5.3-5.2c.1 0 .7-3.3.7-3.9zM40.2 31l9.9 1.2c2.4.4 4.6 1.8 4.8 4.4l.3 6.4H43.7"
        />
      </g>
    </Svg>
  );
};

export default Icon;
