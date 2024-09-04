const initialState = {
  isAuthenticated: false,
  user: null,
  token: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        token: action.token,
        isAuthenticated: true,
      };
    case "LOGOUT":
      return {
        ...state,
        token: action.token,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
