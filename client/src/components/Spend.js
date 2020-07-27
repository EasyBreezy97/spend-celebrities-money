import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import SelectedCelebrity from "./SelectedCelebrity";
import SeeResults from "./SeeResults";
import Items from "./Items";
import { itemsForSale } from "../utils/itemsForSale";

const Spend = ({ match, location }) => {
  const history = useHistory();
  const [netWorth, setNetWorth] = useState(null);
  const [remainingMoney, setRemainingMoney] = useState("");
  const [allItems, setAllItems] = useState(null);

  const purchasedItemsHandler = () => {
    let items = [];

    // eslint-disable-next-line
    itemsForSale.map((item) => {
      items.push({ name: item.name, qty: 0 ,img:item.imgPath});
    });


    setAllItems(items);
  };

  /* eslint-disable  */
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!location.state) {
      history.push("/");
    } else {
      setNetWorth(location.state.celebrity.netWorth);
      setRemainingMoney(location.state.celebrity.netWorth);
      purchasedItemsHandler();
    }
  }, []);
  /* eslint-disable  */

  const spendMoneyHandler = (itemPrice, itemQuantity, name) => {
    if (remainingMoney >= itemPrice * itemQuantity) {
      setRemainingMoney(remainingMoney - itemPrice * itemQuantity);
      for (let item of allItems) {
        if (item.name === name) item.qty += itemQuantity;
      }
      console.log(allItems);
    } else console.log("Oops!");
  };

  return (
    <div className="container">
      <SelectedCelebrity remainingMoney={remainingMoney} location={location} />
      <Items
        click={(itemPrice, itemQuantity, name) =>
          spendMoneyHandler(itemPrice, itemQuantity, name)
        }
        netWorth={netWorth}
      />
      <SeeResults
        purchasedItemsList={allItems}
        remainingMoney={remainingMoney}
      />
    </div>
  );
};

export default Spend;
