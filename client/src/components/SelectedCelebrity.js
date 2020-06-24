import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

import { numberWithCommas } from "../utils/formatMoney";


const SelectedCelebrity = ({ location, remainingMoney }) => {
  const history = useHistory();
  const remainingMoneyRef = useRef(null);
  const imageRef = useRef(null);

  let [celebrityImg, setCelebrityImg] = useState(null);

    /* eslint-disable  */

  useEffect(() => {
    !location.state
      ? history.push("/")
      : setCelebrityImg(location.state.celebrity.imgSrc);


    window.addEventListener("scroll", makeSticky);

    return () => {
      window.removeEventListener("scroll", makeSticky);
    };
  }, []);
      /* eslint-disable  */



  const makeSticky = () => {
    let remainingMoney = remainingMoneyRef.current;

    if (window.pageYOffset > remainingMoney.offsetTop) {
      remainingMoneyRef.current.classList.add("sticky");
    }
    if (window.pageYOffset < imageRef.current.offsetHeight) {
      remainingMoneyRef.current.classList.remove("sticky");
    }
  };

  return (
    <div className="selected-celebrity-container">
      <img src={celebrityImg} alt={celebrityImg} ref={imageRef} />
      <h4 ref={remainingMoneyRef} className="remaining-money">
        Remaining: {numberWithCommas(remainingMoney)} $
      </h4>
    </div>
  );
};

export default SelectedCelebrity;
