import * as types from "../constants/action-types";

export const initialState = {
  // "1": {
  //   id: "1",
  // },
  // "2": {
  //   id: "2",
  // },
  // // "3": {
  // //   id: "3",
  // // },
  // // "4": {
  // //   id: "4",
  // // },
  // root: {
  //   id: "root",
  //   partitionType: "perFess",
  //   parts: ["1", "2"
  //   // , "3", "4"
  // ],
  // },
};
export const emptyPart = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_FIELD:
      return {
        ...state,
        [action.partId]: {
          ...state[action.partId],
          field: action.value,
        },
      };
    case types.CHANGE_CHARGE:
      return {
        ...state,
        [action.partId]: {
          ...state[action.partId],
          charge: action.value,
        },
      };
    case types.CHANGE_CHARGE_COLOUR:
      return {
        ...state,
        [action.partId]: {
          ...state[action.partId],
          chargeColour: action.value,
        },
      };
    case types.CHANGE_PARTITION:
      return {
        ...state,
        [action.partId]: {
          ...state[action.partId],
          partitionType: action.value,
          parts: Object.keys(action.parts),
        },
        ...action.parts,
      };
    case types.CREATE_PARTITION:
      return {
        ...state,
        [action.partId]: {
          id: action.partId,
          partitionType: action.value,
          parts: Object.keys(action.parts),
        },
        ...action.parts,
      };
    case types.CLEAR_FIELD:
      return {
        ...state,
        [action.partId]: {
          id: action.partId,
        },
      };
    case types.CLEAR_PARTITION:
      const newState = Object.values(state)
        .filter((part) => !action.childrenIds.includes(part.id))
        .reduce((prev, part) => {
          return {
            ...prev,
            [part.id]: part,
          };
        }, {});

      return {
        ...newState,
        [action.partId]: {
          id: action.partId,
        },
      };
    case types.DELETE_PARTS:
      return Object.values(state)
        .filter((part) => !action.partIds.includes(part.id))
        .reduce((prev, part) => {
          return {
            ...prev,
            [part.id]: part,
          };
        }, {});

    case types.CLEAR_CHARGE:
      return {
        ...state,
        [action.partId]: {
          id: action.partId,
          charge: undefined,
        },
      };
    default:
      return state;
  }
}

export function getChildrenIds(parts, rootId) {
  const part = parts[rootId];

  if (!part.parts) {
    return [];
  }

  return [
    ...part.parts,
    ...part.parts.map((child) => getChildrenIds(parts, child)),
  ].flat();
}
