import { LOGIN, SIGNUP, LOGOUT } from "../actions/auth";

const initialState = {
  token: "",
  userId: "pippo",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        token: action.token,
        userId: action.userId,
      };

    case SIGNUP:
      return {
        token: action.token,
        userId: action.userId,
      };

    case LOGOUT:
      return initialState;
  }

  return state;
};
