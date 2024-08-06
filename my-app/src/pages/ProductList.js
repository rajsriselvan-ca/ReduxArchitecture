// src/pages/ProductList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { setProducts } from '../store/slice/productSlice';

const ProductList = () => {
  // const products = useSelector((state) => state.products);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   // Fetch products and dispatch setProducts action
  //   const fetchProducts = async () => {
  //     const response = await fetch('/api/products');
  //     const data = await response.json();
  //     // dispatch(setProducts(data));
  //   };
  //   fetchProducts();
  // }, [dispatch]);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {/* {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))} */}
      </ul>
    </div>
  );
};

export default ProductList;
