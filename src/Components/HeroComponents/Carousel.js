import React from "react";

export default function Carousel() {
  return (
    <div className="container-fluid">
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="1000">
            <img src="https://tigtsoft.com/rmclingo/wp-content/uploads/2022/11/pexels-pixabay-256455.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="https://tigtsoft.com/rmclingo/wp-content/uploads/2022/11/pexels-tima-miroshnichenko-9572723.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://tigtsoft.com/rmclingo/wp-content/uploads/2022/11/pexels-tima-miroshnichenko-9572688.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
