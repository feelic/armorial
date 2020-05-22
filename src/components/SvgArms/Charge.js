import React from "react";

import charges from "../charges/index";
import {HEIGHT,WIDTH, fields} from "../../constants/index";

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

export default function Charge(props) {
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
