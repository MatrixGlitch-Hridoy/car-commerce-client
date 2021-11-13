import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(()=>{
        setIsLoading(true)
        axios.get('http://localhost:5000/reviews')
        .then(res=>{
            setReviews(res.data)
            setIsLoading(false)
        });
    },[])
    return (
        <div class="container">
          <div class="row text-center">
            <div class="col-sm-12">
              <h1>Happy <span class="span-text">Client Says</span></h1>
            </div>
          </div>
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 pt-5">
            <div class="col">
              <div class="card h-100 p-3">
                <div class="card-body text-center">
                  {!isLoading ? (
            reviews.map((review) => (
              <div>
              <h4 class="text-center">{review.name}</h4>
              <h6 class="text-center">{review.email}</h6>
              <p class="card-text mt-3">{review.review}</p>
              <p class="text-center"><Rating initialRating={review.rating}/></p>
              </div>
            ))
          ) : (
            <p className="spinner-grow text-warning my-5 text-center"></p>
          )}
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Reviews;