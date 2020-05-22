import React from "react";
import Charge from "./Charge";

import { fields } from "../../constants";
import partitionCoordinates from "../../constants/partition-coordinates";

export default function Part(props) {
  if (props.partitionType) {
    return <Partition {...props} />;
  }

  const { field, bounds } = props;
  const { x, y, height, width } = bounds;
  return (
    <g>
      <rect
        x={x}
        y={y}
        height={height}
        width={width}
        style={{ fill: fields[field] }}
      />
      <Charge {...props} />
    </g>
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
            partitionIndex={idx}
            parentPartitionType={partitionType}
          />
        );
      })}
    </g>
  );
}
