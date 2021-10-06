import {
  REQUESTS_LIST_FAIL,
  REQUESTS_LIST_REQUEST,
  REQUESTS_LIST_SUCCESS,
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
