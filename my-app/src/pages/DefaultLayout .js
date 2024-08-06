import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../styles/defaultLayout.css';

const DefaultLayout = () => {
  return (
    <div >
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Product List</Link></li>
            <li><Link to="/users">User List</Link></li>
            <li><Link to="/orders">Order List</Link></li>
            <li><Link to="/about">About Us</Link></li>
        </ul>
    </nav>
    <hr />
    <Outlet />
</div>

  );
};

export default DefaultLayout;