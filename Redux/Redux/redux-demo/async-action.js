const { createStore, applyMiddleware } = require("redux");
const thunkMiddleware = require("redux-thunk").thunk;
const axios = require("axios");

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const FETCH_USER_REQUESTED = "FETCH_USER_REQUESTED";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAILED = "FETCH_USER_FAILED";

const fetchUserData = () => ({
  type: FETCH_USER_REQUESTED,
});

const fetchUserSuccess = (users) => ({
  type: FETCH_USER_SUCCESS,
  payload: users,
});

const fetchUserFailed = (error) => ({
  type: FETCH_USER_FAILED,
  payload: error,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
          users: action.payload,
        error: "",
      };
    case FETCH_USER_FAILED:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUserData());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map((user) => user.id);
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUserFailed(error.message));
      });
  };
};

// ✅ Correct way to apply middleware
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

const unsubscribe = store.subscribe(() => {
  console.log("Updated state: ", store.getState());
});

store.dispatch(fetchUsers());

 

