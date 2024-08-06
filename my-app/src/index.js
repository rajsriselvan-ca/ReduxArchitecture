import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import DefaultLayout from './App';
import NoNavLayout from '../src/pages/NoNavLayout';
import Home from '../src/pages/Home';
import ProductList from '../src/pages/ProductList';
import UserList from '../src/pages/UserList';
import OrderList from '../src/pages/OrderList';
import DeliveryStatus from '../src/pages/DeliveryStatus';
import RefundStatus from '../src/pages/RefundStatus';
import AboutUs from '../src/pages/AboutUs';
import { Provider } from 'react-redux';
import './styles/defaultLayout.css';
import store from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <Routes>
        {/* Routes with Default Layout */}
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<ProductList />} />
          <Route path="users" element={<UserList />} />
          <Route path="orders" element={<OrderList />}>
            <Route path="delivery-status" element={<DeliveryStatus />} />
            <Route path="refund-status" element={<RefundStatus />} />
          </Route>
        </Route>
        {/* Route with No Navigation Layout */}
        <Route path="/about" element={<NoNavLayout />}>
          <Route index element={<AboutUs />} />
        </Route>
      </Routes>
    </Router>
    </Provider>
  </React.StrictMode>
);

