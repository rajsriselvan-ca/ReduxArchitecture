// src/pages/DeliveryStatus.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { setDeliveryStatus } from '../store/slice/orderSlice';

const DeliveryStatus = () => {
  // const deliveryStatus = useSelector((state) => state.orders.deliveryStatus);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   // Fetch delivery status and dispatch setDeliveryStatus action
  //   const fetchDeliveryStatus = async () => {
  //     const response = await fetch('/api/orders/delivery-status');
  //     const data = await response.json();
  //     // dispatch(setDeliveryStatus(data));
  //   };
  //   fetchDeliveryStatus();
  // }, [dispatch]);

  return (
    <div>
      <h1>Delivery Status</h1>
      <ul>
        {/* {deliveryStatus.map((status) => (
          <li key={status.id}>{status.description}</li>
        ))} */}
      </ul>
    </div>
  );
};

export default DeliveryStatus;
