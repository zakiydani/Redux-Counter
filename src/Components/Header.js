import React from "react";
import { withRouter } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <button onClick={() => props.history.push("/")}>Home</button>

      <button onClick={() => props.history.push("/motor")}>Motor</button>

      <button onClick={() => props.history.push("/car")}>Car</button>
    </div>
  );
}

export default withRouter(Header);
