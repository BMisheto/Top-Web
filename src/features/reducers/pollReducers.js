import { POLL_CREATE_FAIL, POLL_CREATE_REQUEST, POLL_CREATE_RESET, POLL_CREATE_SUCCESS, POLL_DELETE_FAIL, POLL_DELETE_REQUEST, POLL_DELETE_SUCCESS, POLL_DETAILS_FAIL, POLL_DETAILS_REQUEST, POLL_DETAILS_SUCCESS, POLL_LIST_FAIL, POLL_LIST_REQUEST, POLL_LIST_SUCCESS, POLL_UPDATE_FAIL, POLL_UPDATE_REQUEST, POLL_UPDATE_RESETS, POLL_UPDATE_SUCCESS } from "../constants/pollConstants";

  /* REDUCER USED IN HomeScreen COMPONENT */
  export const pollListReducer = (state = { polls: [] }, action) => {
    switch (action.type) {
      case POLL_LIST_REQUEST:
        return {
          loading: true,
          polls: [],
        };
  
      case POLL_LIST_SUCCESS:
        return {
          loading: false,
          polls: action.payload.polls,
          count: action.payload.count,
        };
  
      case POLL_LIST_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  /* REDUCER USED IN ProductScreen COMPONENT */
  export const pollDetailsReducer = (state = { poll: {} }, action) => {
    switch (action.type) {
      case POLL_DETAILS_REQUEST:
        return {
          loading: true,
          ...state,
        };
  
      case POLL_DETAILS_SUCCESS:
        return {
          loading: false,
         poll: action.payload.poll,
        };
  
      case POLL_DETAILS_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  /* REDUCER USED IN ProductListScreen COMPONENT */
  export const pollDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case POLL_DELETE_REQUEST:
        return {
          loading: true,
        };
  
      case POLL_DELETE_SUCCESS:
        return {
          loading: false,
          success: true,
        };
  
      case POLL_DELETE_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  /* REDUCER USED IN ProductListScreen COMPONENT */
  export const pollCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case POLL_CREATE_REQUEST:
        return {
          loading: true,
        };
  
      case POLL_CREATE_SUCCESS:
        return {
          loading: false,
          success: true,
          poll: action.payload,
        };
  
      case POLL_CREATE_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      case POLL_CREATE_RESET:
        return {};
  
      default:
        return state;
    }
  };
  
  /* REDUCER USED IN ProductEditScreen COMPONENT */
  export const pollVoteReducer = (state = { poll: {} }, action) => {
    switch (action.type) {
      case POLL_UPDATE_REQUEST:
        return {
          loading: true,
        };
  
      case POLL_UPDATE_SUCCESS:
        return {
          loading: false,
          success: true,
          poll: action.payload,
        };
  
      case POLL_UPDATE_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      case POLL_UPDATE_RESETS:
        return { poll: {} };
  
      default:
        return state;
    }
  };
  
  export const pollUpdateReducer = (state = {  }, action) => {
    switch (action.type) {
      case POLL_UPDATE_REQUEST:
        return {
          loading: true,
        };
  
      case POLL_UPDATE_SUCCESS:
        return {
          loading: false,
          success: true,
        };
  
      case POLL_UPDATE_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      case POLL_UPDATE_RESETS:
        return {};
  
      default:
        return state;
    }
  };
  