import axios from "axios";
import { REACT_API_URL, REACT_APP_URL } from "../../utilities/utils";
import {
  ATTENDING_ADD_FAIL,
  ATTENDING_ADD_REQUEST,
  ATTENDING_ADD_SUCCESS,
  ATTENDING_LIST_FAIL,
  ATTENDING_LIST_REQUEST,
  ATTENDING_LIST_SUCCESS,
  ATTENDING_REMOVE_FAIL,
  ATTENDING_REMOVE_REQUEST,
  ATTENDING_REMOVE_SUCCESS,
} from "../constants/attendingConstants";

export const listAttendance = (id) => async (dispatch) => {
  try {
    dispatch({
      type: ATTENDING_LIST_REQUEST,
    });
    const { data } = await axios.get(
      `${REACT_APP_URL}/events/attendance/${id}/`
    );

    dispatch({
      type: ATTENDING_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ATTENDING_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const addAttending = (event) => async (dispatch, getState) => {
  
  try {
    dispatch({
      type: ATTENDING_ADD_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      `${REACT_APP_URL}/events/attending/add/${event.id}/`,
      event,
      config
    );

    dispatch({
      type: ATTENDING_ADD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ATTENDING_ADD_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const removeAttending = (event) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ATTENDING_REMOVE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
      data: {
        event: event,
      },
    };

    const { data } = await axios.delete(
      `${REACT_API_URL}/events/attending/remove/${event.id}/`,
      config
    );

    dispatch({
      type: ATTENDING_REMOVE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ATTENDING_REMOVE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

