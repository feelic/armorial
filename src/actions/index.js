import {partitions} from '../constants';
import {emptyPart} from '../reducers/parts';
import uuid from 'uuidv4';

export function changeField (partId, value) {
  return {type: 'CHANGE_FIELD', partId, value};
}
export function changePartition (partId, value) {
  // const partNb = partitions[value].partsNb;

  return {
    type: 'CHANGE_PARTITION',
    partId,
    value
  }
}
export function createPartition (partId, value) {
  const partNb = partitions[value].partsNb;

  console.log(partNb)
  return {
    type: 'CREATE_PARTITION',
    partId,
    value,
    parts: new Array(partNb).fill(0).map(makeNewPart).reduce((prev, curr) => {
      return {...prev, [curr.id]: curr}
    }, {})
  }
}
export function makeNewPart () {
    return {
      ...emptyPart,
      id: uuid()
    }
}
