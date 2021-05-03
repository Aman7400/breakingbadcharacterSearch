import React from "react";
import Spinner from "../img/spinner.gif";

const Loading = () => {
  return (
    <div className="center">
      <img src={Spinner} alt="" />
    </div>
  );
};

export default Loading;
