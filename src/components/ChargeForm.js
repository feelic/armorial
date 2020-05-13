import React from "react";
import { colours, metals /*, charges*/ } from "../constants";
import styles from "./PartForm.module.scss";
import charges from "./charges/index";

export default function ChargeForm(props) {
  const { actions, armsParts, part } = props;

  const fieldColour = part.field;
  const fieldColourType =
    (Object.keys(metals).includes(fieldColour) && "metals") || "colours";
  const chargeColours = (fieldColourType === "metals" && colours) || metals;

  return (
    <div>
      <select
        onChange={e => actions.changeCharge(part.id, e.target.value)}
        value={part.charge}
      >
        <option value={null}>none</option>
        {Object.keys(charges).map(charge => {
          return (
            <option key={charge} value={charge}>
              {charge}
            </option>
          );
        })}
      </select>
      <select
        onChange={e => actions.changeChargeColour(part.id, e.target.value)}
        value={part.chargeColour}
      >
        <option value={null}> </option>
        {Object.keys(chargeColours).map(colour => {
          return (
            <option key={colour} value={colour}>
              {colour}
            </option>
          );
        })}
      </select>
    </div>
  );
}
