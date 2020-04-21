export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const addMotor = () => {
  return {
    type: INCREMENT,
  };
};

export const minusMotor = () => {
  return {
    type: DECREMENT,
  };
};
