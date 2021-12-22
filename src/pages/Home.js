import React from "react";

const Home = () => {
  return (
    <>
      <div className="py-5">
        <div className="container">
          <div className="row hidden-md-up ">
            <div className="col-md-4 mb-5">
              <div className="card border-dark">
                <div className="profile-image">
                  <img
                    className="card-img-top image "
                    src="https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
                    alt="Card image cap"
                  />
                </div>
                <div className="card-body">
                  <p className="card-text">FullName: </p>
                  <p className="card-text">Age: </p>
                  <p className="card-text">Email: </p>
                  <p className="card-text">Phone Number:</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="card border-dark">
                <div className="profile-image">
                  <img
                    className="card-img-top image "
                    src="https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
                    alt="Card image cap"
                  />
                </div>
                <div className="card-body">
                  <p className="card-text">FullName: </p>
                  <p className="card-text">Age: </p>
                  <p className="card-text">Email: </p>
                  <p className="card-text">Phone Number:</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
