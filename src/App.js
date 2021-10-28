import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthProvider from './Contexts/AuthProvider';
import OrderProvider from './Contexts/OrderProvider';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
// import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <OrderProvider>
          <Switch>
          <Route exact path="/"><Home></Home></Route>
          <PublicRoute path="/signin"><Login /></PublicRoute>

            {/* <Route exact path="/"><HomeScreen /></Route>
            <Route exact path="/contact"><ContactScreen /></Route>
            <PrivateRoute exact path="/services/:title"><ServicesDetailScreen /></PrivateRoute>
            <Route exact path="/products/"><ProductsScreen /></Route>
            <PrivateRoute exact path="/products/:title"><ProductDetailScreen /></PrivateRoute>
            <PrivateRoute exact path="/orders"><OrderScreen /></PrivateRoute>
            <Route path="*"><ErrorScreen /></Route> */}
          </Switch>
          {/* <Footer /> */}
        </OrderProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
