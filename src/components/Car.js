import React from 'react';
import { Link } from 'react-router-dom';

const Car = ({car}) => {
    const { _id, model, brand, description, price, image } = car;
    return (
        <div className="col mt-5">
        <div className="card h-100">
          <img src={image} style={{height:"15rem"}} alt="hotels" />
          <div className="card-body">
            <h3 className="card-title">{model}</h3>
            <h5 className="card-title">{brand}</h5>
            <p className="card-text">{description}</p>
            <h5>${price}</h5>
          </div>
          <Link to={`/purchase/${_id}`} style={{textDecoration:"none"}}>
          <div className="d-grid" >
            <button className="btn btn-warning fs-5 fw-bold" >Purchase Now</button>
          </div>
          </Link>
        </div>
      </div>
    );
};

export default Car;