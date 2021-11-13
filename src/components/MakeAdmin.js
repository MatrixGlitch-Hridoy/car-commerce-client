import React, { useState } from "react";
import useAuth from "../hooks/useAuth";

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setEmail('');
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
  return (
    <div>
      <h1 className="text-center">Make Admin</h1>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-6">
              <form onClick={handleAdminSubmit}>
            <div class="mb-3">
              <input
                type="email"
                class="form-control"
                id="formGroupExampleInput2"
                placeholder="Enter Email"
                onBlur={handleOnBlur}
                required 
              />
            </div>
            <div>
                <button type="submit" className="btn btn-warning">Make Admin</button>
            </div>
            </form>
            {success && <p className="bg-success mt-5 text-white p-3 rounded">Made Admin successfully!</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdmin;
