import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Tablets() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9540/allproducts")
      .then((response) => {
        setProducts(response.data);
        console.log("Products fetched:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, []);

  const getImagePath = (imageFullPath) => {
    const imageName = imageFullPath.split('\\').pop();
    return `/images/${imageName}`;
  };

  const filterProductsByCategory = (categoryId) => {
    return products.filter(product => product.category.categoryId === categoryId);
  };
  return (
    <div class="container-xl-fluid justify-content-center">
      <div className="row">
        <img
          src="https://ssmobile.com/in/assets/img/category/Tablet-Banner.jpg"
          className="mt-3 mb-3"
          alt=".."
        />
      </div>

      <div className="row text-center mt-5">
        {filterProductsByCategory(6).map((item) => (
          <div className="col-xl-3">
            <div className="card" c1>
              <img
                src={getImagePath(item.image)}
                class="card-img-top"
                alt={item.name}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                  {item.description}
                  <br />
                  ₹{item.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
