/* ACTION TYPES */
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_RESET,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_RESET,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_RESET,
  USER_DELETE_REQUEST,
  USER_DELETE_FAIL,
  USER_DELETE_SUCCESS,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_RESET,
  EMAIL_CHECK_RESET,
  EMAIL_CHECK_FAIL,
  EMAIL_CHECK_SUCCESS,
  EMAIL_CHECK_REQUEST,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_REQUEST,
  PASSWORD_RESET_FAIL,
} from "../constants/userConstants";

/* REDUCER USED IN USER LOGIN IN LoginScreen COMPONENT */
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        loading: true,
      };

    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };

    case USER_LOGIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case USER_LOGOUT:
      return {}; /* CLEARS STATE */

    default:
      return state;
  }
};

/* REDUCER USED IN USER REGISTRATION IN RegisterScreen COMPONENT */
export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {
        loading: true,
      };

    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };

    case USER_REGISTER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case USER_LOGOUT:
      return {}; /* CLEARS STATE */

    default:
      return state;
  }
};

/* REDUCER USED IN GETTING USER DETAILS IN ProfileScreen COMPONENT */
export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case USER_DETAILS_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };

    case USER_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case USER_DETAILS_RESET:
      return {
        user: {},
      };

    default:
      return state;
  }
};

/* REDUCER USED IN UPDATING USER DETAILS IN ProfileScreen COMPONENT */
export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_PROFILE_REQUEST:
      return {
        loading: true,
      };

    case USER_UPDATE_PROFILE_SUCCESS:
      return {
        loading: false,
        success: true,
        user: action.payload,
      };

    case USER_UPDATE_PROFILE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case USER_UPDATE_PROFILE_RESET:
      return {}; /* RESET STATE */

    default:
      return state;
  }
};

/* REDUCER USED TO GET LIST OF USERS IN UserList SCREEN */
export const userListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return {
        loading: true,
      };

    case USER_LIST_SUCCESS:
      return {
        loading: false,
        users: action.payload.users,
        count: action.payload.count,
        page: action.payload.page,
        pages: action.payload.pages,
    
      };

    case USER_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case USER_LIST_RESET:
      return { users: [] };

    default:
      return state;
  }
};

/* REDUCER USED TO DELETE A USER FROM UserList SCREEN */
export const userDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_DELETE_REQUEST:
      return {
        loading: true,
      };

    case USER_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
      };

    case USER_DELETE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

/* REDUCER USED TO EDIT A USER IN UserEdit SCREEN */
export const userUpdateReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return {
        loading: true,
      };

    case USER_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
      };

    case USER_UPDATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case USER_UPDATE_RESET:
      return {
        user: {},
      };

    default:
      return state;
  }
};

export const userEmailCheckReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case EMAIL_CHECK_REQUEST:
      return {
        loading: true,
      };

    case EMAIL_CHECK_SUCCESS:
      return {
        loading: false,
        success: true,
        message: action.payload.message,
      };

    case EMAIL_CHECK_FAIL:
      return {
        loading: false,
        error: true,
        message: action.payload,
      };


    default:
      return state;
  }
};


export const userResetPasswordReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case PASSWORD_RESET_REQUEST:
      return {
        loading: true,
      };

    case PASSWORD_RESET_SUCCESS:
      return {
        loading: false,
        success: true,
        message: action.payload.message,
      };

    case PASSWORD_RESET_FAIL:
      return {
        loading: false,
        error: true,
        message: action.payload,
      };


    default:
      return state;
  }
};
