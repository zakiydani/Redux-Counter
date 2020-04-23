import React from "react";
import { connect } from "react-redux";
import { addCar, minusCar } from "../Actions/carActions";

const Car = (props) => {
  console.log("props", props);
  return (
    <div>
      <h1>Car</h1>
      <h3>I have {props.car} car</h3>
      <div>
        <button
          onClick={() => {
            props.addCar();
          }}
        >
          +
        </button>
        {props.car}
        <button
          onClick={() => {
            props.minusCar();
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (props) => {
  console.log("Car", props);
  return {
    car: props.carReducers.car,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCar: () => dispatch(addCar()),
    minusCar: () => dispatch(minusCar()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Car);
