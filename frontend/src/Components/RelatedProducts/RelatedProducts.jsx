import React from "react";
import "./relatedProducts.css";
import data_product from '../Assetss/Assets/data';
import Item from "../Item/Item";

const RelatedProducts = () => {
  return (
    <div className="relatedProducts">
      <h1>Related Products</h1>
      <hr></hr>
      <div className="relatedproduct-item">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            ></Item>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
