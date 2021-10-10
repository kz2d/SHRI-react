const initialState = {
  ...JSON.parse(localStorage.getItem("user")),
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "set":
      return { ...state, ...action.payload };
    case "delete":
      return {};
    default:
      return state;
  }
};
