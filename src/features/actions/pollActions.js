/* ACTION CREATOR USED IN HomeScreen COMPONENT */

import axios from "axios";
import { REACT_API_URL, REACT_APP_URL } from "../../utilities/utils";
import {
  POLL_CREATE_FAIL,
  POLL_CREATE_REQUEST,
  POLL_CREATE_SUCCESS,
  POLL_DELETE_FAIL,
  POLL_DELETE_REQUEST,
  POLL_DELETE_SUCCESS,
  POLL_DETAILS_FAIL,
  POLL_DETAILS_REQUEST,
  POLL_DETAILS_SUCCESS,
  POLL_LIST_FAIL,
  POLL_LIST_REQUEST,
  POLL_LIST_SUCCESS,
  POLL_UPDATE_FAIL,
  POLL_UPDATE_REQUEST,
  POLL_UPDATE_SUCCESS,
} from "../constants/pollConstants";

/* ACTION CREATOR USED IN HomeScreen COMPONENT */
export const listPolls = (id) => async (dispatch) => {
  try {
    dispatch({
      type: POLL_LIST_REQUEST,
    });

    const { data } = await axios.get(`${REACT_API_URL}/feed/polls/${id}/`);

    dispatch({
      type: POLL_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POLL_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

/* ACTION CREATOR USED IN ProductScreen COMPONENT */
export const listPollDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: POLL_DETAILS_REQUEST,
    });

    // const {
    //   userLogin: { userInfo },
    // } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(`${REACT_API_URL}/feed/polls/${id}/`, config);

    dispatch({
      type: POLL_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POLL_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

/* ACTION CREATOR USED IN DELETING PRODUCTS IN ProductListScreen COMPONENT */
export const deletePoll = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: POLL_DELETE_REQUEST,
    });

    // PULLING OUT THE CURRENT USER WE ARE LOGGED IN AS
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    /* MAKING API CALL TO DELETE PRODUCT */
    // eslint-disable-next-line
    const { data } = await axios.delete(
      `${REACT_APP_URL}/feed/polls/${id}/delete/`,
      config
    );

    /* IF GET REQUEST SUCCESSFULL WE DISPATCH & SEND THE PAYLOAD TO OUR REDUCER */
    dispatch({
      type: POLL_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: POLL_DELETE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

/* ACTION CREATOR USED IN CREATING PRODUCTS IN ProductListScreen COMPONENT */
export const createPoll = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: POLL_CREATE_REQUEST,
    });

    // PULLING OUT THE CURRENT USER WE ARE LOGGED IN AS
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    /* MAKING API CALL TO CREATE PRODUCT */
    const { data } = await axios.post(
      `${REACT_APP_URL}/feed/polls/${id}/create/`,
      {},
      config
    );

    /* IF POST REQUEST SUCCESSFULL WE DISPATCH & SEND THE PAYLOAD TO OUR REDUCER */
    dispatch({
      type: POLL_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POLL_CREATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

/* ACTION CREATOR USED IN UPDATING PRODUCTS IN ProductEditScreen COMPONENT */
export const votePoll = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: POLL_UPDATE_REQUEST,
    });

    // PULLING OUT THE CURRENT USER WE ARE LOGGED IN AS
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    /* MAKING API CALL TO UPDATE PRODUCT */
    const { data } = await axios.put(
      `${REACT_APP_URL}/feed/polls/${id}/vote/`,
    );

    /* IF PUT REQUEST SUCCESSFULL WE DISPATCH & SEND THE PAYLOAD TO OUR REDUCER */
    dispatch({
      type: POLL_UPDATE_SUCCESS,
      payload: data,
    });

    /* LOAD IN THE UPDATED PRODUCTS DETAILS */
    dispatch({
      type: POLL_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POLL_UPDATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
/* ACTION CREATOR USED IN UPDATING PRODUCTS IN ProductEditScreen COMPONENT */
export const updatePoll = (poll) => async (dispatch, getState) => {
  try {
    dispatch({
      type: POLL_UPDATE_REQUEST,
    });

    // PULLING OUT THE CURRENT USER WE ARE LOGGED IN AS
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    /* MAKING API CALL TO UPDATE PRODUCT */
    const { data } = await axios.put(
      `${REACT_APP_URL}/feed/polls/${poll._id}/update/`,
      poll,
      config
    );

    /* IF PUT REQUEST SUCCESSFULL WE DISPATCH & SEND THE PAYLOAD TO OUR REDUCER */
    dispatch({
      type: POLL_UPDATE_SUCCESS,
      payload: data,
    });

    /* LOAD IN THE UPDATED PRODUCTS DETAILS */
    dispatch({
      type: POLL_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POLL_UPDATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
