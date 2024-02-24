import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
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
          src="https://ssmobile.com/in/assets/img/category/Apple_Watch_Web_Banners_Personalisation_Avail_A_1400x700__en-IN.jpg"
          className="img1 mt-3 mb-3"
          alt=".."
        />
      </div>

      <div className="row text-center mt-5">
        {filterProductsByCategory(1).map((item) => (
          <div class="col-xl-3">
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
