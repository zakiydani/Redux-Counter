import React from "react";
import { connect } from "react-redux";
import { addMotor, minusMotor } from "../Actions/motorActions";

const Motor = (props) => {
  console.log("props", props);
  return (
    <div>
      <h1>Motor</h1>
      <h3>I have {props.motor} motor</h3>

      <button
        onClick={() => {
          props.addMotor();
        }}
      >
        +
      </button>
      {props.motor}
      <button
        onClick={() => {
          props.minusMotor();
        }}
      >
        -
      </button>
    </div>
  )
}

const mapStateToProps = ({ motor }) => {
  return {
    motor: motor
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMotor: () => dispatch(addMotor()),
    minusMotor: () => dispatch(minusMotor())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Motor);
