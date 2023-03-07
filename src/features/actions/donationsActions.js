import { REACT_API_URL, REACT_APP_URL } from "../../utilities/utils";

/* AXIOS */
import axios from "axios";
import {
  DONATION_CREATE_FAIL,
  DONATION_CREATE_REQUEST,
  DONATION_CREATE_SUCCESS,
  DONATION_DELETE_FAIL,
  DONATION_DELETE_REQUEST,
  DONATION_DELETE_SUCCESS,
  DONATION_DETAILS_FAIL,
  DONATION_DETAILS_REQUEST,
  DONATION_DETAILS_SUCCESS,
  DONATION_LIST_FAIL,
  DONATION_LIST_REQUEST,
  DONATION_LIST_SUCCESS,
  DONATION_UPDATE_FAIL,
  DONATION_UPDATE_REQUEST,
  DONATION_UPDATE_SUCCESS,
} from "../constants/donationConstants";

/* ACTION TYPES */

/* ACTION CREATOR USED IN HomeScreen COMPONENT */
export const listDonations =
  (keyword = "") =>
  async (dispatch) => {
    try {
      dispatch({
        type: DONATION_LIST_REQUEST,
      });
      const { data } = await axios.get(`${REACT_APP_URL}/donations/${keyword}`);

      dispatch({
        type: DONATION_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DONATION_LIST_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };

/* ACTION CREATOR USED IN ProductScreen COMPONENT */
export const listDonationDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DONATION_DETAILS_REQUEST,
    });

  

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(
      `${REACT_API_URL}/donations/${id}/`,
      config
    );

    dispatch({
      type: DONATION_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DONATION_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

/* ACTION CREATOR USED IN DELETING PRODUCTS IN ProductListScreen COMPONENT */
export const deleteDonation = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DONATION_DELETE_REQUEST,
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
      `${REACT_APP_URL}/donations/delete/${id}/`,
      config
    );

    /* IF GET REQUEST SUCCESSFULL WE DISPATCH & SEND THE PAYLOAD TO OUR REDUCER */
    dispatch({
      type: DONATION_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: DONATION_DELETE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

/* ACTION CREATOR USED IN CREATING PRODUCTS IN ProductListScreen COMPONENT */
export const createDonation = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: DONATION_CREATE_REQUEST,
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
      `${REACT_APP_URL}/donations/add/`,
      {},
      config
    );

    /* IF POST REQUEST SUCCESSFULL WE DISPATCH & SEND THE PAYLOAD TO OUR REDUCER */
    dispatch({
      type: DONATION_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DONATION_CREATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

/* ACTION CREATOR USED IN UPDATING PRODUCTS IN ProductEditScreen COMPONENT */
export const updateDonation = (donation) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DONATION_UPDATE_REQUEST,
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
      `${REACT_APP_URL}/donations/update/${donation._id}/`,
      donation,
      config
    );

    /* IF PUT REQUEST SUCCESSFULL WE DISPATCH & SEND THE PAYLOAD TO OUR REDUCER */
    dispatch({
      type: DONATION_UPDATE_SUCCESS,
      payload: data,
    });

    /* LOAD IN THE UPDATED PRODUCTS DETAILS */
    dispatch({
      type: DONATION_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DONATION_UPDATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
