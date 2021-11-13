import React from 'react';
import banner from './images/banner.png'
import './css/style.css'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div class="container wrapper">
        <div class="row align-items-center">
          <div class="col-md-6 col-sm-12">
            <p>
              Computer-controlled digital transistorized with electronic advance
            </p>
            <h1>Marcedes-Benz S Class</h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <Link to="/explore">
            <button class="btn btn-warning fw-bold py-2 px-3 border-0 rounded"data-bs-toggle="modal" data-bs-target="#contactModal">Explore Cars</button>
            </Link>
              
          </div>
          <div class="col-md-6 col-sm-12">
            <img src={banner} alt="" class="img-fluid mt-md-0 mt-5" />
          </div>
        </div>
      </div>
    );
};

export default Banner;