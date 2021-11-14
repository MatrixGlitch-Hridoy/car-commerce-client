import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Explore = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios.get("http://localhost:5000/cars").then((res) => {
      setCars(res.data);
      setIsLoading(false);
    });
  }, []);
  return (
    <>
      <div className="container my-5">
        <h1 className="text-center fw-bolder">Explore Our Cars</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {!isLoading ? (
            cars.map((car) => (
              <div className="col mt-5">
                <div className="card h-100">
                  <img
                    src={car.image}
                    style={{ height: "15rem" }}
                    alt="hotels"
                  />
                  <div className="card-body">
                    <h3 className="card-title">{car.model}</h3>
                    <h5 className="card-title">{car.brand}</h5>
                    <p className="card-text">{car.description}</p>
                    <h5>${car.price}</h5>
                  </div>
                  <Link
                    to={`/purchase/${car._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="d-grid">
                      <button className="btn btn-warning fs-5 fw-bold">
                        Purchase Now
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="spinner-grow text-warning my-5 text-center"></p>
          )}
        </div>
      </div>
    </>
  );
};

export default Explore;
