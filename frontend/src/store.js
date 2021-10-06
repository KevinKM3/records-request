import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer } from "./reducers/userReducers";
import { requestListReducer } from "./reducers/requestListReducer";

const reducer = combineReducers({
  // Redux state management reducers will go here

  userLogin: userLoginReducer,
  requestList: requestListReducer,

  // userRegister: userRegisterReducer,
  // noteCreate: noteCreateReducer,
  // noteDelete: noteDeleteReducer,
  // noteUpdate: noteUpdateReducer,
  // userUpdate: userUpdateReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
