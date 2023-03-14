import {
  ATTENDING_ADD_FAIL,
  ATTENDING_ADD_REQUEST,
  ATTENDING_ADD_RESET,
  ATTENDING_ADD_SUCCESS,
  ATTENDING_LIST_FAIL,
  ATTENDING_LIST_REQUEST,
  ATTENDING_LIST_SUCCESS,
  ATTENDING_REMOVE_FAIL,
  ATTENDING_REMOVE_REQUEST,
  ATTENDING_REMOVE_RESET,
  ATTENDING_REMOVE_SUCCESS,
} from "../constants/attendingConstants";

export const attendingListReducer = (state = { attending: [] }, action) => {
  switch (action.type) {
    case ATTENDING_LIST_REQUEST:
      return {
        loading: true,
        attending: [],
      };

    case ATTENDING_LIST_SUCCESS:
      return {
        loading: false,
        attending: action.payload.attending,
        page: action.payload.page,
        pages: action.payload.pages,
        count: action.payload.count,
      };

    case ATTENDING_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const attendingAddReducer = (state = {}, action) => {
  switch (action.type) {
    case ATTENDING_ADD_REQUEST:
      return {
        loading: true,
      };

    case ATTENDING_ADD_SUCCESS:
      return {
        loading: false,
        success: true,
      };

    case ATTENDING_ADD_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case ATTENDING_ADD_RESET:
      return {};

    default:
      return state;
  }
};

export const attendingRemoveReducer = (state = {}, action) => {
  switch (action.type) {
    case ATTENDING_REMOVE_REQUEST:
      return {
        loading: true,
      };

    case ATTENDING_REMOVE_SUCCESS:
      return {
        loading: false,
        success: true,
      };

    case ATTENDING_REMOVE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case ATTENDING_REMOVE_RESET:
      return {};

    default:
      return state;
  }
};
