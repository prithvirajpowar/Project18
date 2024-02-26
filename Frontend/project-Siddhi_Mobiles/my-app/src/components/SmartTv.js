import React, { useEffect, useState } from "react";
import axios from "axios";
import Header2 from "./Header2";

export default function SmartTv () {
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
    <>
    <Header2></Header2>
    <div class="container-xl-fluid justify-content-center">
      <div className="row">
        <img
          src="https://img.global.news.samsung.com/in/wp-content/uploads/2020/06/Wondertainment_1200x628.jpg"
          className="img7 mt-3 mb-3"
          alt=".."
        />
      </div>
      <div className="row text-center mt-5">
      {filterProductsByCategory(5).map((item) => (
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
    </>
  );
}


