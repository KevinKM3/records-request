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

export const requestListReducer = (state = { requests: [] }, action) => {
  switch (action.type) {
    case REQUESTS_LIST_REQUEST:
      return { loading: true };
    case REQUESTS_LIST_SUCCESS:
      return { loading: false, requests: action.payload };
    case REQUESTS_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
export const requestCreateReducer = (state = { requests: [] }, action) => {
  switch (action.type) {
    case REQUESTS_CREATE_REQUEST:
      return { loading: true };
    case REQUESTS_CREATE_SUCCESS:
      return { loading: false, requests: action.payload };
    case REQUESTS_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const requestDeleteReducer = (state = { requests: [] }, action) => {
  switch (action.type) {
    case REQUESTS_DELETE_REQUEST:
      return { loading: true };
    case REQUESTS_DELETE_SUCCESS:
      return { loading: false, requests: action.payload };
    case REQUESTS_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const requestUpdateReducer = (state = { requests: [] }, action) => {
  switch (action.type) {
    case REQUESTS_UPDATE_REQUEST:
      return { loading: true };
    case REQUESTS_UPDATE_SUCCESS:
      return { loading: false, requests: action.payload };
    case REQUESTS_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
