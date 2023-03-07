import {
    EVENT_CREATE_FAIL,
    EVENT_CREATE_REQUEST,
    EVENT_CREATE_RESET,
    EVENT_CREATE_SUCCESS,
    EVENT_DELETE_FAIL,
    EVENT_DELETE_REQUEST,
    EVENT_DELETE_SUCCESS,
    EVENT_DETAILS_FAIL,
    EVENT_DETAILS_REQUEST,
    EVENT_DETAILS_SUCCESS,
    EVENT_LIST_FAIL,
    EVENT_LIST_REQUEST,
    EVENT_LIST_SUCCESS,
    EVENT_UPDATE_FAIL,
    EVENT_UPDATE_REQUEST,
    EVENT_UPDATE_RESETS,
    EVENT_UPDATE_SUCCESS,
  } from "../constants/eventCostants";
  
  /* REDUCER USED IN HomeScreen COMPONENT */
  export const eventListReducer = (state = { events: [] }, action) => {
    switch (action.type) {
      case EVENT_LIST_REQUEST:
        return {
          loading: true,
          products: [],
        };
  
      case EVENT_LIST_SUCCESS:
        return {
          loading: false,
          events: action.payload.events,
          page: action.payload.page,
          pages: action.payload.pages,
          count: action.payload.count,
        };
  
      case EVENT_LIST_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  /* REDUCER USED IN ProductScreen COMPONENT */
  export const eventDetailsReducer = (state = { event: {} }, action) => {
    switch (action.type) {
      case EVENT_DETAILS_REQUEST:
        return {
          loading: true,
          ...state,
        };
  
      case EVENT_DETAILS_SUCCESS:
        return {
          loading: false,
          event: action.payload.event,
        };
  
      case EVENT_DETAILS_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  /* REDUCER USED IN ProductListScreen COMPONENT */
  export const eventDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case EVENT_DELETE_REQUEST:
        return {
          loading: true,
        };
  
      case EVENT_DELETE_SUCCESS:
        return {
          loading: false,
          success: true,
        };
  
      case EVENT_DELETE_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  /* REDUCER USED IN ProductListScreen COMPONENT */
  export const eventCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case EVENT_CREATE_REQUEST:
        return {
          loading: true,
        };
  
      case EVENT_CREATE_SUCCESS:
        return {
          loading: false,
          success: true,
         event: action.payload,
        };
  
      case EVENT_CREATE_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      case EVENT_CREATE_RESET:
        return {};
  
      default:
        return state;
    }
  };
  
  /* REDUCER USED IN ProductEditScreen COMPONENT */
  export const eventUpdateReducer = (state = {event: {} }, action) => {
    switch (action.type) {
      case EVENT_UPDATE_REQUEST:
        return {
          loading: true,
        };
  
      case EVENT_UPDATE_SUCCESS:
        return {
          loading: false,
          success: true,
          event: action.payload.event,
        };
  
      case EVENT_UPDATE_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      case EVENT_UPDATE_RESETS:
        return { event: {} };
  
      default:
        return state;
    }
  };
