import React from "react";
import Charge from "./Charge";

import { fields } from "../../constants";
import partitions from "../../constants/partitions";

export default function Part(props) {
  if (props.partitionType) {
    return <Partition {...props} />;
  }

  const { field, bounds } = props;

  if(!bounds || ! bounds.length) {
    return null;
  }

  return (
    <g>
      <polygon
        points={bounds.map(point => `${point.x} ${point.y}`).join(', ')}
        style={{ fill: fields[field] }}
      />
      <Charge {...props} />
    </g>
  );
}

function Partition(props) {
  const { partitionType, parts: partIds, armsParts, bounds } = props;
  const coord = partitions[partitionType].coordinates(bounds);

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
