import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../js/store';
import "../css/Home.css";

export default function Home() {
  
  const products = useSelector((state) => state.products.data);
  const dispatch = useDispatch();

  useEffect(() => {
    // Check if the products data is empty before fetching
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products]);


  return (
    <>
      {/* <div>
        <div className="container products">
          <div className="row">
            {products.map((product) => (
              <div
                key={product.id}
                className="col-lg-3 col-md-4 col-6 d-flex flex-column align-items-center mt-4"
              >
                <p className="p-0 m-0">Product ID: {product.id}</p>
                <img src={product.image} alt={product.name} />
              </div>
            ))}
          </div>
        </div>
      </div> */}
      {/* <!-- Hero Section Start --> */}
    <section className="hero " id="hero">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-interval="200">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://images.unsplash.com/photo-1506404523803-9f9fa45e066e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHwzOTU0NTB8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="d-block" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://images.unsplash.com/photo-1549740425-5e9ed4d8cd34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzOTU0NTB8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="d-block " alt="..."/>
                </div>

            </div>
            <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </section>
    {/* <!-- Hero End --> */}
    </>
  );
}
