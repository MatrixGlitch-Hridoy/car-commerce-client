import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
const Header = () => {
  const { user, logout } = useAuth();
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand fw-bolder" to="/" style={{fontSize:"2rem"}}>
            <span className="text-warning">C</span>ar-<span className="text-warning">C</span>ommerce
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
                
              </li>
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/explore">
                  Explore
                </Link>
                
              </li>
              {user?.email && (
                <li className="my-auto fw-bold me-2 text-warning">
                  <Link className="nav-link active" aria-current="page" to="/dashboard">
                  Dashboard
                </Link>
                </li>
              )}
              {user?.email && (
                <li className="my-auto fw-bold me-2 text-warning">{user.displayName}</li>
              )}
              
              {user?.email ? (
                <Link to="/">
                  <button className="btn btn-danger" onClick={logout}>Logout</button>
                </Link>
              ) : (
                <Link to="/login">
                  <button className="btn btn-warning px-4 fw-bold">Sign In</button>
                </Link>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
    );
};

export default Header;