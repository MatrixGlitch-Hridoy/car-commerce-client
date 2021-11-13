import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Car from './Car';

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(()=>{
        setIsLoading(true)
        axios.get('http://localhost:5000/cars')
        .then(res=>{
            setCars(res.data)
            setIsLoading(false)
        });
    },[])
    return (
        <div className="container my-5">
            <h1 className="text-center fw-bolder">Featured Cars</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    !isLoading ? cars.slice(0,6).map(car=><Car key={car._id} car={car}></Car>)
                    :
                    <p className="spinner-grow text-warning my-5 text-center"></p>
                    
                }
            </div>            
        </div>
    );

};

export default Cars;