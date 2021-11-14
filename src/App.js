import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider";
import Explore from "./pages/Explore";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PurchaseCar from "./pages/PurchaseCar";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/explore">
              <Explore />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute exact path="/purchase/:id">
              <PurchaseCar />
            </PrivateRoute>
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
