import React from "react";
import { fields, colours, metals, partitions } from "../constants";
import ChargeForm from "./ChargeForm";
import styles from "./PartForm.module.scss";

export default function PartForm(props) {
  const { actions, armsParts, part } = props;

  if (part.partitionType) {
    return (
      <div className={styles.partForm}>
        <PartitionSelector
          onSelect={actions.changePartition}
          armsParts={armsParts}
          part={part}
        />
        <button onClick={() => actions.clearPartition(part.id)}>
          {" "}
          clear partition{" "}
        </button>
        {part.parts.map(partId => {
          return (
            <PartForm
              key={partId}
              actions={actions}
              armsParts={armsParts}
              part={armsParts[partId]}
            />
          );
        })}
      </div>
    );
  }
  if (part.field) {
    return (
      <div className={styles.partForm}>
        <FieldForm actions={actions} armsParts={armsParts} part={part} />
        <button onClick={() => actions.clearField(part.id)}>
          {" "}
          clear field{" "}
        </button>
        <ChargeForm actions={actions} armsParts={armsParts} part={part} />
      </div>
    );
  }
  return (
    <div className={styles.partForm}>
      <FieldForm actions={actions} armsParts={armsParts} part={part} />
      Or create partition
      <PartitionSelector
        onSelect={actions.createPartition}
        armsParts={armsParts}
        part={part}
      />
    </div>
  );
}

function PartitionSelector(props) {
  const { onSelect, part } = props;

  return (
    <div>
      Select partition type
      <select
        onChange={e => onSelect(part.id, e.target.value)}
        value={part.partitionType}
      >
        <option value={null}> </option>
        {Object.values(partitions).map(partition => {
          return (
            <option key={partition.id} value={partition.id}>
              {partition.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

function FieldForm(props) {
  const { actions, part } = props;

  return (
    <div>
      Select colour or metal
      <select
        onChange={e => actions.changeField(part.id, e.target.value)}
        value={part.field}
      >
        <option value={null}> </option>
        {Object.keys(fields).map(field => {
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
