import React, { useState } from "react";
import { numberWithCommas } from "../utils/formatMoney";
import {itemsForSale} from '../utils/itemsForSale'


const Items = (props) => {
  const [quantity, setQuantity] = useState(1);

  const quantityHandler = (e) => {
    setQuantity(+e.target.value);
    console.log(+e.target.value);
  };

  return (
    <div>
      <div className="item-quantity-continer">
        <span>buy</span>
        <select onChange={quantityHandler} className="select-quantity">
          <option value={1}>1</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
        </select>
        <span>items at once</span>
      </div>

      <div className=" items-grid ">
        {itemsForSale.map((item, index) => (
          <div className="items-inner-grid" key={`${index}_${item.name}`}>
            <h3>{item.name}</h3>
            <img
              className="item-img"
              src={window.location.origin + item.imgPath}
              alt="img-for-sale"
            />
            <h4>Price: {numberWithCommas(item.price)} $</h4>

            <button
              onClick={() => props.click(item.price, quantity,item.name)}
              className="btn btn-primary"
            >
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
