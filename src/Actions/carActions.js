export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const addCar = () => {
  return {
    type: INCREMENT,
  };
};

export const minusCar = () => {
  return {
    type: DECREMENT,
  };
};
