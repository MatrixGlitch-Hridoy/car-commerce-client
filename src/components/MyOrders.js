import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/orders/${user.email}`).then((res) => {
      setOrders(res.data);
    });
  }, []);
  const handleCancelBooking = (id) => {
    const permission = window.confirm("Are you sure, you want to cancel?");
    if (permission) {
      axios.delete(`http://localhost:5000/orders/${id}`).then((res) => {
        // console.log(res);
        if (res.data.deletedCount > 0) {
          alert("Order Cancel Successful!");
          const remainingOrders = orders.filter(
            (booking) => booking._id !== id
          );
          setOrders(remainingOrders);
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
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            <tbody>
              {orders.length > 0 ? (
                orders.map((booking) => (
                  <tr key={booking._id}>
                    <td>{booking.model}</td>
                    <td>{booking.brand}</td>
                    <td>{booking.price}</td>
                    <td>{booking.username}</td>
                    <td>{booking.email}</td>
                    <td className="text-success fw-bold">{booking.status}</td>
                    <td>
                      <button
                        class="btn btn-danger"
                        onClick={() => handleCancelBooking(booking._id)}
                      >
                        Cancel Booking
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

export default MyOrders;