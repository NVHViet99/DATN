import React from "react";
import Contacts from "../components/Form/Contacts";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { useSelector } from "react-redux";

const PageThree = () => {
  const loading = useSelector((state) => state.loading.isLoading);
  console.log(loading);

  return (
    <div>
      <div className="centered">{loading && <LoadingSpinner />}</div>
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <Contacts />
        </div>
      </div>
    </div>
  );
};

export default PageThree;
