import { INCREMENT, DECREMENT } from "../Actions/motorActions";

const initialState = {
  motor: 0,
};

const motorReducers = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        motor: state.motor + 1,
      };
    case DECREMENT:
      return {
        ...state,
        motor: state.motor - 1,
      };
    default:
      return state;
  }
};

export default motorReducers;
