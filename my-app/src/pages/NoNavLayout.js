import React from 'react';
import { Outlet } from 'react-router-dom';

const NoNavLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default NoNavLayout;