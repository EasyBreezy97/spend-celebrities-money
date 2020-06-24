import React from "react";
import { useHistory } from "react-router-dom";

const SeeResults = ({ purchasedItemsList,remainingMoney }) => {
  const history = useHistory();

  const filterResults = () => {
    let filteredArray = purchasedItemsList.filter((item) => item.qty !== 0);

    history.push({
      pathname: "/results",
      state: filteredArray,remainingMoney
    });
  };

  return <button className="btn btn-results" onClick={filterResults}>See results</button>;
};

export default SeeResults;
