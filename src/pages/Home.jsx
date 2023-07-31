import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../js/store';
import "../css/Home.css";

export default function Home() {
  const products = useSelector((state) => state.products.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  return (
    <>
      <div>
        <div className="container products">
          <div className="row">
            {products.map((product) => (
              <div
                key={product.id}
                className="col-lg-3 col-md-4 col-6 d-flex flex-column align-items-center mt-4"
              >
                {/* <p>Product Name{product.name}</p> */}
                <p className="p-0 m-0">Product ID: {product.id}</p>
                <img src={product.image} alt={product.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
