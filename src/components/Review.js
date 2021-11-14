import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../hooks/useAuth';

const Review = () => {
    const {user} = useAuth();
    const [review, setReview] = useState("");
    const [rating, setRating] = useState("");
    const history = useHistory();

    const handleAddReview = (e) => {
        e.preventDefault();
        const values = {
            name:user?.displayName,
            email:user?.email,
          review:review,
          rating:rating
        }

        axios.post('https://car-commerce.herokuapp.com/reviews',values)
        .then(res=>{
          if(res.data.insertedId){
            alert('Review Added Successfully!');
            history.push('/');
          }
        })
        
    }
    return (
        <>
            <div class="container my-5">
        <h1 className="text-center">Give Review</h1>
        <div class="row justify-content-center">
          <div class="col-sm-6">
            <form onSubmit={handleAddReview} class="row g-3">
              <div class="col-md-12">
                <label for="inputEmail4" class="form-label">
                  Name
                </label>
                <input 
                type="text"
                class="form-control"
                id="inputEmail4"
                value={user?.displayName}
                placeholder="Enter Car Model"
                readOnly
                />
              </div>
              <div class="col-md-12">
                <label for="inputEmail4" class="form-label">
                  Email
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Enter Brand Name"
                  value={user?.email}
                  readOnly
                />
              </div>
              <div class="col-md-12">
                <label for="inputEmail4" class="form-label">
                  Rating
                </label>
                <select class="form-select" aria-label="Default select example" onChange={(e) => setRating(e.target.value)}>
                    <option value="">Add Rating</option>
                    <option value="1">1 Star</option>
                    <option value="2">2 Star</option>
                    <option value="3">3 Star</option>
                    <option value="4">4 Star</option>
                    <option value="5">5 Star</option>
                </select>
              </div>
              <div class="col-md-12">
                <label for="inputEmail4" class="form-label">
                  Say Something
                </label>
                <textarea
                  type="text"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Description"
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  required
                />
              </div>
              
                <div class="d-grid">
              <button type="submit" class="btn btn-warning">
                Add Review
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
        </>
    );
};

export default Review;