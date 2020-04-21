import { INCREMENT, DECREMENT } from "../Actions/carActions";

const initialState = {
  car: 0,
};

const carReducers = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        car: state.car + 1
      }
    case DECREMENT:
      return {
        ...state,
        car: state.car - 1
      }
    default:
      return state;
  }
};

export default carReducers;
