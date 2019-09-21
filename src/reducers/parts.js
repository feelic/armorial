import * as types from '../constants/action-types';

export const initialState = {
  root: {
    id: "root"
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
    default:
      return state;
  }
}
