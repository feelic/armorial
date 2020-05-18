import React from "react";
import { fields } from "../../constants";
import { Background, Glow, Border } from "./BaseElements";
import charges from "../charges/index";

import partitionCoordinates from "../../constants/partition-coordinates";

const HEIGHT = 660;
const WIDTH = 600;

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
          bounds={{ x: 0, y: 0, width: WIDTH, height: HEIGHT }}
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
            partitionIndex={idx}
            parentPartitionType={partitionType}
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
const chargeTouchUpByDivision = {
  perPale: [
    { scale: 1.4, translate: { x: 75, y: 0 } },
    { scale: 1.4, translate: { x: 75, y: -25 } }
  ],
  perFess: [
    { scale: 1.5, translate: { x: -80, y: 75 } },
    { scale: 1.5, translate: { x: -80, y: 75 } }
  ],
  quarterly: [
    { scale: 1, translate: { x: 10, y: 100 } },
    { scale: 1, translate: { x: -10, y: 100 } },
    { scale: 1, translate: { x: 10, y: 0 } },
    { scale: 1, translate: { x: -10, y: 0 } }
  ]
};
function Charge(props) {
  if (!props.charge) {
    return null;
  }
  const { parentPartitionType, partitionIndex } = props;
  const ChargeImage = charges[props.charge];
  const { x, y, height, width } = props.bounds;
  const touchUp = (chargeTouchUpByDivision[parentPartitionType] &&
    chargeTouchUpByDivision[parentPartitionType][partitionIndex]) || {
    scale: 1,
    translate: { x: 10, y: 50 }
  };
  const widthRatio = (width / WIDTH) * touchUp.scale;
  const heightRatio = (height / HEIGHT) * touchUp.scale;
  const scale = (widthRatio > heightRatio && heightRatio) || widthRatio;
  const translateX = x + touchUp.translate.x * widthRatio;
  const translateY = y + touchUp.translate.y * heightRatio;

  return (
    <g transform={`translate(${translateX},${translateY}) scale(${scale})`}>
      <ChargeImage colour={fields[props.chargeColour]} />
    </g>
  );
}
