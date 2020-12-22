import React from "react";

import charges from "../charges/index";
import { HEIGHT, WIDTH, fields } from "../../constants/index";
import { getBoundsFromPoints } from "../../constants/partitions";

const CHARGE_BASE_SIZE = 300;

export default function Charge(props) {
  if (!props.charge) {
    return null;
  }
  const { parentPartitionType, partitionIndex } = props;
  const ChargeImage = charges[props.charge];
  const { x, y, h, w } = getBoundsFromPoints(props.bounds);

  const widthRatio = w / CHARGE_BASE_SIZE;
  const heightRatio = h / CHARGE_BASE_SIZE;
  const scale = (widthRatio > heightRatio && heightRatio) || widthRatio;

  const chargeWidth = CHARGE_BASE_SIZE * scale;
  const translateX = x + (w / 2) - (chargeWidth / 2) + 0.08 * w;
  console.log(x, w / 2, chargeWidth / 2)
  const translateY = y + 0.1 * h;

  return (
    <g transform={`translate(${translateX},${translateY}) scale(${scale})`}>
      <ChargeImage colour={fields[props.chargeColour]} />
    </g>
  );
}
