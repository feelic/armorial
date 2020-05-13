import React from "react";
import { fields } from "../../constants";
import { Background, Glow, Border } from "./BaseElements";

import partitionCoordinates from "../../constants/partition-coordinates";

export default function Arms(props) {
  const { armsParts } = props;

  return (
    <svg viewBox="0 0 660 660" style={{ width: "auto", height: "auto" }}>
      <clipPath id="escutcheon">
        <Background />
      </clipPath>

      <Background />
      <g id="parts" clipPath="url(#escutcheon)">
        <Part
          armsParts={armsParts}
          {...armsParts.root}
          bounds={{ x: 0, y: 0, width: 600, height: 660 }}
        />
      </g>
      <Glow />
      <Border />
    </svg>
  );
}

function Partition(props) {
  const { partitionType, parts: partIds, armsParts, bounds } = props;
  const coord = partitionCoordinates[partitionType](bounds);

  return (
    <g>
      {partIds.map((partId, idx) => {
        return (
          <Part
            key={idx}
            armsParts={armsParts}
            {...armsParts[partId]}
            bounds={coord[idx]}
          />
        );
      })}
    </g>
  );
}

function Part(props) {
  if (props.partitionType) {
    return <Partition {...props} />;
  }

  const { field, bounds } = props;
  const { x, y, height, width } = bounds;
  return (
    <rect
      x={x}
      y={y}
      height={height}
      width={width}
      style={{ fill: fields[field] }}
    />
  );
}
