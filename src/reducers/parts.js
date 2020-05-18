import * as types from '../constants/action-types';

export const initialState = {
  "root": {
    "id": "root",
    "field": "sable",
    "charge": "cerf-courant",
    "chargeColour": "or"
  }
};
export const emptyPart = {

};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_FIELD:
      return {
        ...state,
        [action.partId]: {
          ...state[action.partId],
          field: action.value
        }
      };
    case types.CHANGE_CHARGE:
      return {
        ...state,
        [action.partId]: {
          ...state[action.partId],
          charge: action.value
        }
      };
      case types.CHANGE_CHARGE_COLOUR:
        return {
          ...state,
          [action.partId]: {
            ...state[action.partId],
            chargeColour: action.value
          }
        };
    case types.CHANGE_PARTITION:
      return {
        ...state,
        [action.partId]: {
          ...state[action.partId],
          partitionType: action.value
        }
      };
    case types.CREATE_PARTITION:
      return {
        ...state,
        [action.partId]: {
          id: action.partId,
          partitionType: action.value,
          parts: Object.keys(action.parts)
        },
        ...action.parts
      };
    case types.CLEAR_FIELD:
    case types.CLEAR_PARTITION:
      return {
        ...state,
        [action.partId]: {
          id: action.partId
        }
      };
    case types.CLEAR_CHARGE:
      return {
        ...state,
        [action.partId]: {
          id: action.partId,
          charge: undefined
        }
      };
    default:
      return state;
  }
}
