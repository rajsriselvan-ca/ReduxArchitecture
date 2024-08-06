// src/pages/OrderList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { setOrders } from '../store/slice/orderSlice';
import { Link, Outlet } from 'react-router-dom';

const OrderList = () => {
  // const orders = useSelector((state) => state.orders.list);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   // Fetch orders and dispatch setOrders action
  //   const fetchOrders = async () => {
  //     const response = await fetch('/api/orders');
  //     const data = await response.json();
  //     // dispatch(setOrders(data));
  //   };
  //   fetchOrders();
  // }, [dispatch]);

  return (
    <div>
      <h1>Order List</h1>
      <ul>
        {/* {orders.map((order) => (
          <li key={order.id}>{order.description}</li>
        ))} */}
      </ul>
      <ul>
        <li><Link to="delivery-status">Delivery Status</Link></li>
        <li><Link to="refund-status">Refund Status</Link></li>
      </ul>
      <Outlet />
    </div>
  );
};

export default OrderList;
