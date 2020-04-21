import React from "react";
import { connect } from "react-redux";
// import car from "../Reducers/carReducers";
// import motor from "../Reducers/motorReducers";

const Home = (props) => {
  console.log("PROPS", props);
  return (
    <div>
      <h1>Home</h1>
      <h3>Total Car : {props.car}</h3>
      <h3>Total Motor : {props.motor}</h3>
      <h3>Total Semua : {props.total}</h3>
    </div>
  );
};

const mapStateToProps = ({car, motor}) => {
  return {
    car: car,
    motor: motor,
    total: car + motor,
  };
};

export default connect(mapStateToProps, null)(Home);
