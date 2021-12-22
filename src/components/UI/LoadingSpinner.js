import classes from "./LoadingSpinner.module.css";
import React from "react";
import Modal from "./Modal";

const LoadingSpinner = () => {
  return (
    <Modal className={classes.center}>
      <div className="centered">
        <div className={classes.spinner}>Loading</div>;
      </div>
    </Modal>
  );
  // return <div>Loading Image</div>;
};

export default LoadingSpinner;
