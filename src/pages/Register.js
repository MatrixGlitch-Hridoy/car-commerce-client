import React, { useState } from 'react';
// import { BsGoogle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useHistory, useLocation } from "react-router-dom";

const Register = () => {
const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const location = useLocation();
    const { user, registerUser,signInWithGoogle, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    
    return (
        <>
            <div class="vh-100" style={{ backgroundColor: "#508bfc" }}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                class="card shadow-2-strong"
                style={{ borderRadius: "1rem" }}
              >
                <div class="card-body p-5 text-center">
                  <h3 class="mb-5">Sign Up</h3>

                    <form onSubmit={handleLoginSubmit}>
                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      class="form-control form-control-lg"
                      placeholder="Enter your name"
                      name="name"
                      onBlur={handleOnBlur}
                      required
                    />
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="email"
                      class="form-control form-control-lg"
                      placeholder="Enter your email"
                      name="email"
                      onBlur={handleOnBlur}
                      required
                    />
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      class="form-control form-control-lg"
                      placeholder="Enter your password"
                      name="password"
                      onBlur={handleOnBlur}
                      required
                    />
                  </div>
                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      class="form-control form-control-lg"
                      placeholder="Re-Type your password"
                      name="password2"
                      onBlur={handleOnBlur}
                      required
                    />
                  </div>
                  <div class="d-grid">
                    <button
                      class="btn btn-primary btn-lg btn-block"
                      type="submit"
                    >
                      Register
                    </button>
                    {isLoading && <p className="spinner-grow text-warning my-5 text-center"></p>}
                    {user?.email && <p class="text-success">User Created successfully!</p>}
                    {authError && <p class="text-error">{authError}</p>}
                    
                  </div>
                  </form>
                  <p class="small fw-bold mt-2 pt-1 mb-0">
                      Already have an account?{" "}
                      <Link to="/login" class="link-danger">
                        Login
                      </Link>
                    </p>


                  <hr class="my-4" />
                  <div class="d-grid">
                    <button
                      class="btn btn-lg btn-block btn-primary"
                      style={{ backgroundColor: "#dd4b39" }}
                      onClick={handleGoogleSignIn}
                    >
                        Sign in with google
                      {/* <BsGoogle /> Sign in with google */}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    );
};

export default Register;