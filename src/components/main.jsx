import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/photo1.jpg"
            alt="Card"
            height={90} 
          />
          <div className="card-img-overlay d-flex align-items-center justify-content-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="text-center">
              <h5 className="card-title fs-1 text fw-lighter">Welcome to our store, have a nice day!</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;