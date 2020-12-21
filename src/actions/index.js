import partitions from "../constants/partitions";
import { emptyPart, getChildrenIds } from "../reducers/parts";
import * as types from "../constants/action-types";

let partIdx = 0;

export function changeField(partId, value) {
  return { type: types.CHANGE_FIELD, partId, value };
}
export function changeCharge(partId, value) {
  return { type: types.CHANGE_CHARGE, partId, value };
}
export function changeChargeColour(partId, value) {
  return { type: types.CHANGE_CHARGE_COLOUR, partId, value };
}
export const changePartition = (partId, value) => (dispatch, getState) => {
  if (!value) {
    return clearPartition(partId);
  }

  const state = getState();
  const currentParts = state.parts[partId].parts;
  const partNb = partitions[value].partsNb;
  const parts = new Array(partNb)
    .fill(0)
    .map((p, idx) => {
      if (currentParts[idx]) {
        return state.parts[currentParts[idx]];
      }
      return makeNewPart();
    })
    .reduce((prev, curr) => {
      return { ...prev, [curr.id]: curr };
    }, {});

  if (currentParts.length > partNb) {
    dispatch(deleteParts(currentParts.slice(partNb)));
  }

  return dispatch({
    type: types.CHANGE_PARTITION,
    partId,
    parts,
    value,
  });
};
export function createPartition(partId, value = 'perFess') {
  const partNb = partitions[value].partsNb;

  return {
    type: types.CREATE_PARTITION,
    partId,
    value,
    parts: new Array(partNb)
      .fill(0)
      .map(makeNewPart)
      .reduce((prev, curr) => {
        return { ...prev, [curr.id]: curr };
      }, {}),
  };
}
export function makeNewPart() {
  return {
    ...emptyPart,
    id: String((partIdx += 1)),
  };
}
export function clearField(partId) {
  return {
    type: types.CLEAR_FIELD,
    partId,
  };
}
export function deleteParts(partIds) {
  return {
    type: types.DELETE_PARTS,
    partIds,
  };
}

export function clearPartition(partId) {
  return function (dispatch, getState) {
    const childrenIds = getChildrenIds(getState().parts, partId);

    return dispatch({
      type: types.CLEAR_PARTITION,
      partId,
      childrenIds,
    });
  };
}
export function clearCharge(partId) {
  return {
    type: types.CLEAR_CHARGE,
    partId,
  };
}
