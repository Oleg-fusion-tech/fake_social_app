import * as actionTypes from "../actions/actions";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export function reducerUser(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_USER_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.user,
        loading: false,
      };
    case actionTypes.FETCH_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    case actionTypes.USER_LOGOUT:
      return initialState
    default:
      return state;
  }
}
