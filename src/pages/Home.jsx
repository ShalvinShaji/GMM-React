import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/Home.css";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Define an async function to fetch the data
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://64c6affb0a25021fde91e1bf.mockapi.io/gmm/products"
        );
        setProducts(response.data);
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the async function to fetch the data
    fetchData();
  }, []);
  
  return (
   <>
     <div>
      <div  className="container products">
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-lg-3 col-md-4 col-6 d-flex flex-column align-items-center mt-4">
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
