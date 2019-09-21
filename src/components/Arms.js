import React from 'react';
import {fields} from '../constants';
import partitions from './partitions.module.scss';

export default function Arms (props) {
  const {armsParts} = props;

  return (
    <div className={partitions.escutcheon}>
      <Part armsParts={armsParts} {...armsParts.root} />
    </div>
  );
}

function Partition (props) {
  const {partitionType, parts: partIds, armsParts} = props;

  return <div className={partitions[partitionType]}>
    {partIds.map((partId, idx) => {
      return <Part key={idx} armsParts={armsParts} {...armsParts[partId]} />
    })}
  </div>;
}

function Part (props) {
  if (props.partitionType) {
    return <Partition {...props} />
  }

  const {field} = props;

  return <div
  className={partitions.partition}
  style={{backgroundColor: fields[field]}}>
  </div>;
}
