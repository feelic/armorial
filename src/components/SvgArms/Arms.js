import React from "react";
import { Background, Glow, Border } from "./BaseElements";
import Part from "./Part";

import {HEIGHT,WIDTH} from "../../constants/index";

export default function Arms(props) {
  const { armsParts } = props;

  // add <?xml version="1.0" standalone="yes"?> <svg viewBox="0 0 660 660" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  // in order to export as image
  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      style={{ width: "auto", height: "auto" }}
    >
      <clipPath id="escutcheon">
        <Background />
      </clipPath>

      <Background />
      <g id="parts" clipPath="url(#escutcheon)">
        <Part
          armsParts={armsParts}
          {...armsParts.root}
          bounds={{ x: 0, y: 0, w: WIDTH, h: HEIGHT }}
        />
      </g>
      <Glow />
      <Border />
    </svg>
  );
}
