import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthProvider from './Contexts/AuthProvider';
import OrderProvider from './Contexts/OrderProvider';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
// import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';
import PrivateRoute from './Routes/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
import ServicePage from './Pages/ServicePage/ServicePage';
import BookNowPage from './Pages/BookNowPage/BookNowPage';
import OrderUpdatePage from './Pages/OrderUpdatePage/OrderUpdatePage';
import NotFound from './Pages/NotFound/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <OrderProvider>
          <Switch>
          <Route exact path="/"><Home></Home></Route>
          <Route exact path="/service"><ServicePage></ServicePage></Route>
          <PublicRoute path="/signin"><Login /></PublicRoute>
          <PrivateRoute path="/dashboard"><Dashboard /></PrivateRoute>
          <PrivateRoute path="/bookNow/:id"><BookNowPage /></PrivateRoute>
          <PrivateRoute path="/orderDetails/:id"><OrderUpdatePage /></PrivateRoute>
          <Route path="*"><NotFound /></Route> 

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
