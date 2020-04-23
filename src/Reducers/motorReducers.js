import { INC, DEC } from "../Actions/motorActions";

const initialState = {
  motor: 0,
};

const motorReducers = (state = initialState, action) => {
  switch (action.type) {
    case INC:
      return {
        ...state,
        motor: state.motor + 1,
      };
    case DEC:
      return {
        ...state,
        motor: state.motor - 1,
      };
    default:
      return state;
  }
};

export default motorReducers;
