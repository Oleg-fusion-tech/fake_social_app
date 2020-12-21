import * as actionTypes from "./actions";
import * as userApi from '../../api/users';

export function signIn() {
  return async (dispatch) => {
    try {
      dispatch({
        type: actionTypes.FETCH_USER_START,
      });
      const user = await userApi.signInUser();
      
      dispatch({
        type: actionTypes.FETCH_USER_SUCCESS,
        user,
      });
    } catch (e) {
      dispatch({
        type: actionTypes.FETCH_USER_ERROR,
        error: e.message,
      })
      localStorage.removeItem('id')
    }
  }
}

export function registerUser(name) {
  return async (dispatch) => {
    try {
      dispatch({
        type: actionTypes.FETCH_USER_START,
      });
      const user = await userApi.createUser(name);
      
      dispatch({
        type: actionTypes.FETCH_USER_SUCCESS,
        user,
      });
    } catch (e) {
      dispatch({
        type: actionTypes.FETCH_USER_ERROR,
        error: e.message,
      })
    }
  }
}

export function setUserColor(color, userId) {
  return async (dispatch) => {
    try {
      dispatch({
        type: actionTypes.FETCH_USER_START,
      });
      const user = await userApi.setUserColor({ color, id: userId });
      
      dispatch({
        type: actionTypes.FETCH_USER_SUCCESS,
        user,
      });
    } catch (e) {
      dispatch({
        type: actionTypes.FETCH_USER_ERROR,
        error: e.message,
      })
    }
  }
}

export function setUserLogout() {
  localStorage.removeItem('id')
  return {type: actionTypes.USER_LOGOUT}
}