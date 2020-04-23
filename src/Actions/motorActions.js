export const INC = "INC";
export const DEC = "DEC";

export const addMotor = () => {
  return {
    type: INC,
  };
};

export const minusMotor = () => {
  return {
    type: DEC,
  };
};
