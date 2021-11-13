import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useAuth from '../hooks/useAuth';
const PurchaseCar = () => {
    const {id} = useParams();
    const [car,setCar] = useState([]);
    const {user} = useAuth();
    const [model, setModel] = useState("");
    const [brand, setBrand] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [displayName, setdisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const history = useHistory();

    useEffect(()=>{
        fetch(`http://localhost:5000/cars/${id}`)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
          setCar(data)
          setModel(data.model)
          setBrand(data.brand)
          setPrice(data.price)
          setImage(data.image)
          setdisplayName(user.displayName)
          setEmail(user.email)
        })
    },[])

    const handlePurchase = (e) => {
        e.preventDefault();
        const values = {
          h_id:id,
          model: model,
          brand: brand,
          price:price,
          username:displayName,
          email:email,
          address:address,
          phone:phone,
          status:'pending'
        }

        axios.post('http://localhost:5000/orders',values)
        .then(res=>{
          if(res.data.insertedId){
            alert('purchase Successful');
            history.push('/');
          }
        })
    }
    return (
      <>
        <div class="container my-5">
        <h1 className="text-center">Purchase Car</h1>
        <div class="row align-items-center">
            <div class="col-md-4 col-sm-12">
                <img src={image} alt="" class="w-50"/>
            </div>
          <div class="col-md-8 col-sm-12">
            <form onSubmit={handlePurchase} class="row g-3">
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  Car Model
                </label>
                <input 
                type="text"
                class="form-control"
                id="inputEmail4"
                onChange={(e) => setModel(e.target.value)}
                name="name"
                defaultValue={car.model}
                readOnly />
              </div>
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  Car Brand
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail4"
                  defaultValue={car.brand}
                  readOnly
                />
              </div>
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  Price
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail4"
                  defaultValue={car.price}
                  readOnly
                />
              </div>
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  Username
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail4"
                  defaultValue={user.displayName}
                  readOnly
                />
              </div>
              <div class="col-6">
                <label for="inputAddress" class="form-label">
                  Email
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                  defaultValue={user.email}
                  readOnly
                />
              </div>
              <div class="col-6">
                <label for="inputAddress" class="form-label">
                  Address
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="Address"
                  required
                  value={address}
                 onChange={(e) => setAddress(e.target.value)}

                />
              </div>
              <div class="col-12">
                <label for="inputAddress" class="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="Phone Number"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
                <div class="d-grid">
              <button type="submit" class="btn btn-warning">
                Place Order
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </>
    );
};

export default PurchaseCar;