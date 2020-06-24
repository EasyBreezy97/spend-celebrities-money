import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { numberWithCommas } from "../utils/formatMoney";
import Loader from "./Loader";

const Celebrities = () => {
  const [celebrities, setCelebrities] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let { data } = await axios.get("/api/list");
    console.log(data);
    setCelebrities(data);
  };

  return (
    <div className="container">
      {celebrities ? (
        <div className="celebrity-grid">
          {celebrities.map((celebrity, i) => (
            <div key={i + celebrity} className="inside-grid">
              <Link to={{ pathname: `/spend/${i}`, state: { celebrity } }}>
                <img
                  className="celebrity-img"
                  src={celebrity.imgSrc}
                  alt="celebrity"
                />
              </Link>
              <span className="net-worth-value">
                Net worth: {numberWithCommas(celebrities[i].netWorth)} $
              </span>
            </div>
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Celebrities;
