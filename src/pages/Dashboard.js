import React from 'react';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import AddProduct from '../components/AddProduct';
import AdminRoute from '../components/AdminRoute';
import DashboardContent from '../components/DashboardContent';
import MakeAdmin from '../components/MakeAdmin';
import ManageOrder from '../components/ManageOrder';
import ManageProduc from '../components/ManageProduc';
import MyOrders from '../components/MyOrders';
import Pay from '../components/Pay';
import Review from '../components/Review';
import useAuth from '../hooks/useAuth';
const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { admin, logout} = useAuth();
    const sideBar = (
        <div>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              <li className="nav-item bg-dark text-center">
                <Link to={`${url}`} className="nav-link active text-white">Dashboard</Link>
              </li>
              <li className="nav-item bg-dark text-center">
                <Link to={`${url}/review`} className="nav-link active text-white">Review</Link>
              </li>
              <li className="nav-item bg-dark text-center">
                <Link to={`${url}/my-orders`} className="nav-link active text-white">My Orders</Link>
              </li>
              {admin && <div>
              <li className="nav-item bg-dark text-center">
              <Link className="nav-link active text-white" to={`${url}/manage-orders`}>
                  Manage All orders
                </Link>
                
              </li>
              <li className="nav-item bg-dark text-center">
              <Link className="nav-link active text-white" to={`${url}/add-product`}>
                  Add Product
                </Link>
                
              </li>
              <li className="nav-item bg-dark text-center">
              <Link className="nav-link active text-white" to={`${url}/make-admin`}>
                  Make Admin
                </Link>
                
              </li>
              <li className="nav-item bg-dark text-center">
              <Link className="nav-link active text-white" to={`${url}/manage-products`}>
                  Manage Products
                </Link>
                
              </li>
              
              </div>
}
<li className="nav-item bg-dark text-center">
              <Link className="nav-link active text-white" to={`${url}/payment`}>
                  Payment
                </Link>
                
              </li>
<li className="nav-item bg-dark text-center">
              <Link className="nav-link active text-white" onClick={logout} to={'/'}>
                  Logout
                </Link>
                
              </li>
                </ul>
                </div>
    )
    return (
        <div className="container-fluid">

        <div className="row min-vh-100">
            <div className="col-md-2 bg-dark">
                {sideBar}
            </div>
            <div className="col-md-10">
            <Switch>
                    <Route exact path={path}>
                        <DashboardContent/>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review/>
                    </Route>
                    <Route path={`${path}/my-orders`}>
                        <MyOrders/>
                    </Route>
                    <AdminRoute path={`${path}/manage-orders`}>
                        <ManageOrder/>
                    </AdminRoute>
                    <AdminRoute path={`${path}/add-product`}>
                        <AddProduct/>
                    </AdminRoute>
                    <AdminRoute path={`${path}/make-admin`}>
                        <MakeAdmin/>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manage-products`}>
                        <ManageProduc/>
                    </AdminRoute>
                    <Route path={`${path}/payment`}>
                        <Pay/>
                    </Route>
                </Switch>
            </div>

        </div>
       

      </div>
    );
};

export default Dashboard;