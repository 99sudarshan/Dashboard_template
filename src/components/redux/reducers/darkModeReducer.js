import { HANDLE_DARK_MODE } from "../actions/actionTypes";

const initialState = {
  dark_mode: false,
};

const darkModeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case HANDLE_DARK_MODE:
      return {
        ...state,
        dark_mode: payload,
      };

    default:
      return state;
  }
};
export default darkModeReducer;
