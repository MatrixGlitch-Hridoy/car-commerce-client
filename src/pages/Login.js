import React, { useState } from "react";
// import { BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useHistory, useLocation } from "react-router-dom";
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
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
                  <h3 class="mb-5">Sign in</h3>
                    <form onSubmit={handleLoginSubmit}>
                  <div class="form-outline mb-4">
                    <input
                      type="email"
                      id="typeEmailX-2"
                      class="form-control form-control-lg"
                      placeholder="Enter your email"
                      name="email"
                      onChange={handleOnChange}
                      required
                      
                    />
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      id="typePasswordX-2"
                      class="form-control form-control-lg"
                      name="password"
                      placeholder="Enter your password"
                      onChange={handleOnChange}
                      required
                    />
                  </div>
                  <div class="d-grid">
                    <button
                      class="btn btn-primary btn-lg btn-block"
                      type="submit"
                    >
                      Login
                    </button>
                    <p class="small fw-bold mt-2 pt-1 mb-0">
                      Don't have an account?{" "}
                      <Link to="/register" class="link-danger">
                        Register
                      </Link>
                    </p>
                  </div>
                  {isLoading && <p className="spinner-grow text-warning my-5 text-center"></p>}
                {user?.email && <p class="text-success">Login successfully!</p>}
                {authError && <p class="text-error">{authError}</p>}

                  <hr class="my-4" />
                  <div class="d-grid">
                    <button
                      class="btn btn-lg btn-block btn-primary"
                      style={{ backgroundColor: "#dd4b39" }}
                      onClick={handleGoogleSignIn}
                    >
                       Sign in with google
                    </button>
                  </div>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
