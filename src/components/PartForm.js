import React from "react";
import { fields, colours, metals } from "../constants";
import partitions from "../constants/partitions";
import ChargeForm from "./ChargeForm";
import styles from "./PartForm.module.scss";
import { useDispatch } from "react-redux";
import * as actions from "../actions";

export default function PartForm(props) {
  const dispatch = useDispatch();
  const { armsParts, part } = props;

  if (part.partitionType) {
    return (
      <div className={styles.partForm}>
        <b>{part.id}</b>
        <PartitionSelector
          onSelect={(id, value) =>
            dispatch(actions.changePartition(part.id, value))
          }
          armsParts={armsParts}
          part={part}
        />
        <button onClick={() => dispatch(actions.clearPartition(part.id))}>
          clear partition
        </button>
        {part.parts.map((partId) => {
          return (
            <PartForm
              key={partId}
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
        <b>{part.id}</b>
        <FieldForm armsParts={armsParts} part={part} />
        <button onClick={() => dispatch(actions.clearField(part.id))}>
          clear field
        </button>
        <ChargeForm armsParts={armsParts} part={part} />
      </div>
    );
  }
  return (
    <div className={styles.partForm}>
      <b>{part.id}</b>
      <FieldForm armsParts={armsParts} part={part} />
      Or create partition
      <PartitionSelector
        onSelect={() => dispatch(actions.createPartition(part.id))}
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
        onChange={(e) => onSelect(part.id, e.target.value)}
        value={part.partitionType}
      >
        <option value={null}> </option>
        {Object.values(partitions).map((partition) => {
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
  const dispatch = useDispatch();
  const { part } = props;

  return (
    <div>
      Select colour or metal
      <select
        onChange={(e) => dispatch(actions.changeField(part.id, e.target.value))}
        value={part.field}
      >
        <option value="">select a field colour</option>
        {Object.keys(fields).map((field) => {
          return (
            <option key={field} value={field} style={{backgroundColor: fields[field]}}>
              {field}
            </option>
          );
        })}
      </select>
    </div>
  );
}
