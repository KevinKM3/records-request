import axios from "axios";
import {
  REQUESTS_LIST_FAIL,
  REQUESTS_LIST_REQUEST,
  REQUESTS_LIST_SUCCESS,
} from "../constants/requestConstants";

export const requestNotes = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: REQUESTS_LIST_REQUEST,
    });

    const { data } = await axios.get(`/api/requests`);

    dispatch({
      type: REQUESTS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: REQUESTS_LIST_FAIL,
      payload: message,
    });
  }
};
