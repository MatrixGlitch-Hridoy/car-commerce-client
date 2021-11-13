import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

const AddProduct = () => {
    const [model, setModel] = useState("");
    const [brand, setBrand] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const history = useHistory();

    const handleAddHotel = (e) => {
        e.preventDefault();
        const values = {
          model: model,
          brand:brand,
          price:price,
          description:description,
          image:image
        }

        axios.post('http://localhost:5000/cars',values)
        .then(res=>{
          if(res.data.insertedId){
            alert('Car Added Successfully!');
            history.push('/explore');
          }
        })
        
    }
    return (
        <>
            <div class="container my-5">
        <h1 className="text-center">Add Car</h1>
        <div class="row">
          <div class="col-sm-12">
            <form onSubmit={handleAddHotel} class="row g-3">
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  Car Model
                </label>
                <input 
                type="text"
                class="form-control"
                id="inputEmail4"
                placeholder="Enter Car Model"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                required
                />
              </div>
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  Brand
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Enter Brand Name"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  required
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
                  placeholder="Enter Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  Image URL
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="image url"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  required
                />
              </div>
              <div class="col-md-12">
                <label for="inputEmail4" class="form-label">
                  Description
                </label>
                <textarea
                  type="text"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              
                <div class="d-grid">
              <button type="submit" class="btn btn-warning">
                Add Car
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
        </>
    );
};

export default AddProduct;