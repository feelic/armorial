import React from "react";
import { colours, metals/*, charges*/ } from "../constants";
import styles from "./PartForm.module.scss";
import charges from './charges/index';

export default function ChargeForm(props) {
  const { actions, armsParts, part } = props;

  return (
    <div>
      {" "}
      <select
        onChange={e => actions.changeCharge(part.id, e.target.value)}
        value={part.field}
      >
      <option value={''}>
        none
      </option>
      {Object.keys(charges).map(field => {
        return (
          <option key={field} value={field}>
            {field}
          </option>
        );
      })}
      </select>
    </div>
  );
}
