import {partitions} from '../constants';
import {emptyPart} from '../reducers/parts';
import * as types from '../constants/action-types';

let partIdx = 0;

export function changeField (partId, value) {
  return {type: types.CHANGE_FIELD, partId, value};
}
export function changeCharge (partId, value) {
  return {type: types.CHANGE_CHARGE, partId, value};
}
export function changeChargeColour (partId, value) {
  return {type: types.CHANGE_CHARGE_COLOUR, partId, value};
}
export function changePartition (partId, value) {
  // const partNb = partitions[value].partsNb;

  return {
    type: types.CHANGE_PARTITION,
    partId,
    value
  }
}
export function createPartition (partId, value) {
  const partNb = partitions[value].partsNb;

  return {
    type: types.CREATE_PARTITION,
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
      id: partIdx += 1
    }
}
export function clearField (partId) {
  return {
    type: types.CLEAR_FIELD,
    partId
  }
}
export function clearPartition (partId) {
  return {
    type: types.CLEAR_PARTITION,
    partId
  }
}
export function clearCharge (partId) {
  return {
    type: types.CLEAR_CHARGE,
    partId
  }
}
