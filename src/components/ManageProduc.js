import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageProduc = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    axios.get(`https://car-commerce.herokuapp.com/cars`).then((res) => {
      setCars(res.data);
    });
  }, []);
  const handleRemoveCars = (id) => {
    const permission = window.confirm("Are you sure, you want to remove?");
    if (permission) {
      axios.delete(`https://car-commerce.herokuapp.com/cars/${id}`).then((res) => {
        // console.log(res);
        if (res.data.deletedCount > 0) {
          alert("Car Removed Successfully!");
          const remainingCars = cars.filter(
            (car) => car._id !== id
          );
          setCars(remainingCars);
        }
      });
    }
  };
  return (
    <div class="container">
      <h1 class="text-center mt-5 ">My Bookings</h1>
      <div class="row mt-5">
        <div class="col-sm-12 justify-content-center mx-auto table-responsive-sm">
          <table class="table border-primary">
            <thead>
              <tr>
                <th scope="col">Model</th>
                <th scope="col">Brand</th>
                <th scope="col">Price</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>

            <tbody>
              {cars.length > 0 ? (
                cars.map((car) => (
                  <tr key={car._id}>
                    <td>{car.model}</td>
                    <td>{car.brand}</td>
                    <td>{car.price}</td>
                    <td>
                      <button
                        class="btn btn-danger"
                        onClick={() => handleRemoveCars(car._id)}
                      >
                        Remove Cars
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <h3 class="text-center text-danger my-5 ">No Records Found</h3>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageProduc;