import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthProvider from './Contexts/AuthProvider';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import PublicRoute from './Routes/PublicRoute';
import PrivateRoute from './Routes/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
import ServicePage from './Pages/ServicePage/ServicePage';
import BookNowPage from './Pages/BookNowPage/BookNowPage';
import OrderUpdatePage from './Pages/OrderUpdatePage/OrderUpdatePage';
import NotFound from './Pages/NotFound/NotFound';
import About from './Pages/About/About';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route exact path="/"><Home></Home></Route>
          <Route exact path="/service"><ServicePage></ServicePage></Route>
          <Route exact path="/about"><About></About></Route>
          <PublicRoute path="/signin"><Login /></PublicRoute>
          <PrivateRoute path="/dashboard"><Dashboard /></PrivateRoute>
          <PrivateRoute path="/bookNow/:id"><BookNowPage /></PrivateRoute>
          <PrivateRoute path="/orderDetails/:id"><OrderUpdatePage /></PrivateRoute>
          <Route path="*"><NotFound /></Route>
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
