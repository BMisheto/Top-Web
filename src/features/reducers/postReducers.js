import {
  POST_CREATE_COMMENT_FAIL,
  POST_CREATE_COMMENT_REQUEST,
  POST_CREATE_COMMENT_RESET,
  POST_CREATE_COMMENT_SUCCESS,
  POST_CREATE_FAIL,
  POST_CREATE_REQUEST,
  POST_CREATE_RESET,
  POST_CREATE_SUCCESS,
  POST_DELETE_FAIL,
  POST_DELETE_REQUEST,
  POST_DELETE_SUCCESS,
  POST_DETAILS_FAIL,
  POST_DETAILS_REQUEST,
  POST_DETAILS_SUCCESS,
  POST_LIST_FAIL,
  POST_LIST_REQUEST,
  POST_LIST_SUCCESS,
  POST_UPDATE_FAIL,
  POST_UPDATE_REQUEST,
  POST_UPDATE_RESET,
  POST_UPDATE_SUCCESS,
} from "../constants/postConstants";

/* REDUCER USED IN HomeScreen COMPONENT */
export const postListReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case POST_LIST_REQUEST:
      return {
        loading: true,
        posts: [],
      };

    case POST_LIST_SUCCESS:
      return {
        loading: false,
        posts: action.payload.posts,
        page: action.payload.page,
        pages: action.payload.pages,
        count: action.payload.count,
      };

    case POST_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};



export const postMyListReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case POST_LIST_REQUEST:
      return {
        loading: true,
        posts: [],
      };

    case POST_LIST_SUCCESS:
      return {
        loading: false,
        posts: action.payload.posts,
        page: action.payload.page,
        pages: action.payload.pages,
        count: action.payload.count,
      };

    case POST_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

/* REDUCER USED IN ProductScreen COMPONENT */
export const postDetailsReducer = (state = { post: {},comments: {} }, action) => {
  switch (action.type) {
    case POST_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case POST_DETAILS_SUCCESS:
      return {
        loading: false,
        post: action.payload.post,
        comments: action.payload.comments,
      };

    case POST_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

/* REDUCER USED IN ProductListScreen COMPONENT */
export const postDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_DELETE_REQUEST:
      return {
        loading: true,
      };

    case POST_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
      };

    case POST_DELETE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

/* REDUCER USED IN ProductListScreen COMPONENT */
export const postCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_CREATE_REQUEST:
      return {
        loading: true,
      };

    case POST_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        post: action.payload,
      };

    case POST_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case POST_CREATE_RESET:
      return {};

    default:
      return state;
  }
};

/* REDUCER USED IN ProductEditScreen COMPONENT */
export const postUpdateReducer = (state = { post: {} }, action) => {
  switch (action.type) {
    case POST_UPDATE_REQUEST:
      return {
        loading: true,
      };

    case POST_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        post: action.payload.post,
      };

    case POST_UPDATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case POST_UPDATE_RESET:
      return { post: {} };

    default:
      return state;
  }
};

/* REDUCER USED IN ProductScreen COMPONENT */
export const postCommentCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_CREATE_COMMENT_REQUEST:
      return {
        loading: true,
      };

    case POST_CREATE_COMMENT_SUCCESS:
      return {
        loading: false,
        success: true,
      };

    case POST_CREATE_COMMENT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case POST_CREATE_COMMENT_RESET:
      return {};

    default:
      return state;
  }
};
