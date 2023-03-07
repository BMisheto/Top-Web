import {
  COMMENT_CREATE_FAIL,
  COMMENT_CREATE_REQUEST,
  COMMENT_CREATE_RESET,
  COMMENT_CREATE_SUCCESS,
  COMMENT_DELETE_FAIL,
  COMMENT_DELETE_REQUEST,
  COMMENT_DELETE_SUCCESS,
  COMMENT_DETAILS_FAIL,
  COMMENT_DETAILS_REQUEST,
  COMMENT_DETAILS_SUCCESS,
  COMMENT_LIST_FAIL,
  COMMENT_LIST_REQUEST,
  COMMENT_LIST_SUCCESS,
  COMMENT_UPDATE_FAIL,
  COMMENT_UPDATE_REQUEST,
  COMMENT_UPDATE_RESET,
  COMMENT_UPDATE_SUCCESS,
} from "../constants/commentConstants";

/* REDUCER USED IN HomeScreen COMPONENT */
export const commentListReducer = (state = { comments: [] }, action) => {
  switch (action.type) {
    case COMMENT_LIST_REQUEST:
      return {
        loading: true,
        products: [],
      };

    case COMMENT_LIST_SUCCESS:
      return {
        loading: false,
        comments: action.payload.comments,
        count: action.payload.count,
      };

    case COMMENT_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

/* REDUCER USED IN ProductScreen COMPONENT */
export const commentDetailsReducer = (state = { comment: {} }, action) => {
  switch (action.type) {
    case COMMENT_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case COMMENT_DETAILS_SUCCESS:
      return {
        loading: false,
        comment: action.payload.comment,
      };

    case COMMENT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

/* REDUCER USED IN ProductListScreen COMPONENT */
export const commentDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case COMMENT_DELETE_REQUEST:
      return {
        loading: true,
      };

    case COMMENT_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
      };

    case COMMENT_DELETE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

/* REDUCER USED IN ProductListScreen COMPONENT */
export const commentCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case COMMENT_CREATE_REQUEST:
      return {
        loading: true,
      };

    case COMMENT_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        comment: action.payload,
      };

    case COMMENT_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case COMMENT_CREATE_RESET:
      return {};

    default:
      return state;
  }
};

/* REDUCER USED IN ProductEditScreen COMPONENT */
export const commentUpdateReducer = (state = { comment: {} }, action) => {
  switch (action.type) {
    case COMMENT_UPDATE_REQUEST:
      return {
        loading: true,
      };

    case COMMENT_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        comment: action.payload,
      };

    case COMMENT_UPDATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case COMMENT_UPDATE_RESET:
      return { comment: {} };

    default:
      return state;
  }
};
