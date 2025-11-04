import React, { useState } from "react";
import product1 from "./../assets/1.PNG";
import product2 from "./../assets/2.PNG";
import product3 from "./../assets/3.PNG";
import product4 from "./../assets/4.PNG";
import product5 from "./../assets/5.PNG";
import "./Shop.css";

const initialProducts = [
  {
    id: 1,
    image: product1,
    name: "Hoodi mit Kapuze - Estragon Collection",
    price: 60.0,
    brand: "Estra",
  },
  {
    id: 2,
    image: product2,
    name: "Sweat Pants - Estragon Collection",
    price: 50.0,
    brand: "Estra",
  },
  {
    id: 3,
    image: product3,
    name: "T-Shirt - Estragon Collection",
    price: 25.0,
    brand: "Estra",
  },
  {
    id: 4,
    image: product4,
    name: "Sweater - Estragon Collection",
    price: 55.0,
    brand: "Estra",
  },
  {
    id: 5,
    image: product5,
    name: "Cap - Estragon Collection",
    price: 25.0,
    brand: "Estra",
  },
];

function Shop() {
  const [products] = useState(initialProducts);

  const formatPrice = (price) =>
    new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
    }).format(price);

  return (
    <div className="shop-page">
      <div className="shop-header">
        <button className="filter-button">⚙️ Filter anzeigen</button>
        <div className="sort">
          <label>Sortieren nach:</label>
          <button className="sort-button">meistverkauft</button>
        </div>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="product-info">
              <p className="product-brand">{product.brand}</p>
              <p className="product-name">{product.name}</p>
              <p className="product-price">{formatPrice(product.price)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="load-more-wrapper">
        <button className="load-more-button">Mehr anzeigen</button>
      </div>
    </div>
  );
}

export default Shop;
