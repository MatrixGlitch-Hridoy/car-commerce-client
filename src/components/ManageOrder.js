import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageOrder = () => {
    const [manageOrders, setManageOrders] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/orders").then((res) => {
      setManageOrders(res.data);
    });
  }, [manageOrders]);

  const handleCancelBooking = (id) => {
    const permission = window.confirm("Are you sure, you want to cancel?");
    if (permission) {
      axios.delete(`http://localhost:5000/orders/${id}`).then((res) => {
        // console.log(res);
        if (res.data.deletedCount > 0) {
          alert("Order Cancel Successful!");
          const remainingBooking = manageOrders.filter(
            (booking) => booking._id !== id
          );
          setManageOrders(remainingBooking);
        }
      });
    }
  };
  
  const handleStatus = (id) => {
    axios.put(`http://localhost:5000/orders/${id}`)
    .then(res=>{
        if(res.status===200){
        alert('Order Shipped SuccessFully!')
        }
    })
  }
  return (
    <div class="container">
      <h1 class="text-center mt-5 ">Manage All Orders</h1>
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
              {manageOrders.length > 0 ? (
                manageOrders.map((booking) => (
                  <tr key={booking._id}>
                    <td>{booking.model}</td>
                    <td>{booking.brand}</td>
                    <td>{booking.price}</td>
                    <td>{booking.username}</td>
                    <td>{booking.email}</td>
                    <td>{booking.status}</td>
                    <td>
                        {booking.status!=='Shipped' ?
                      <button onClick={()=>handleStatus(booking._id)} class="btn btn-success">Shipped</button>
                      :
                      ""
                }
                      <button
                        class="btn btn-danger mx-1"
                        onClick={() => handleCancelBooking(booking._id)}
                      >
                        Delete Order
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

export default ManageOrder;