import axios from "axios";
import {
  REQUESTS_CREATE_FAIL,
  REQUESTS_CREATE_REQUEST,
  REQUESTS_CREATE_SUCCESS,
  REQUESTS_DELETE_FAIL,
  REQUESTS_DELETE_REQUEST,
  REQUESTS_DELETE_SUCCESS,
  REQUESTS_LIST_FAIL,
  REQUESTS_LIST_REQUEST,
  REQUESTS_LIST_SUCCESS,
  REQUESTS_UPDATE_FAIL,
  REQUESTS_UPDATE_REQUEST,
  REQUESTS_UPDATE_SUCCESS,
} from "../constants/requestConstants";

export const listRequests = () => async (dispatch, getState) => {
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

export const createRequestAction =
  (
    request_text,
    request_due_date,
    expiration_date,
    department_names,
    requester
  ) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: REQUESTS_CREATE_REQUEST,
      });

      getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `/api/requests/create`,
        {
          request_text,
          request_due_date,
          expiration_date,
          department_names,
          requester,
        },
        config
      );

      dispatch({
        type: REQUESTS_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: REQUESTS_CREATE_FAIL,
        payload: message,
      });
    }
  };

export const deleteRequestAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: REQUESTS_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`/api/requests/${id}`, config);

    dispatch({
      type: REQUESTS_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: REQUESTS_DELETE_FAIL,
      payload: message,
    });
  }
};

export const updateRequestAction =
  (
    id,
    request_text,
    request_due_date,
    expiration_date,
    department_names,
    requester
  ) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: REQUESTS_UPDATE_REQUEST,
      });

      getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.put(
        `/api/requests/${id}`,
        {
          request_text,
          request_due_date,
          expiration_date,
          department_names,
          requester,
        },
        config
      );

      dispatch({
        type: REQUESTS_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: REQUESTS_UPDATE_FAIL,
        payload: message,
      });
    }
  };
