import React from "react";


const Showcase = () => {
  return (
    <section className="showcase">
      <div className="showcase-img-container">
        <img className="showcase-img" src={'/img/CoffeeDoddle.png'} alt="showcase-img"/>
        <img className="showcase-img" src={'/img/BalletDoodle.png'} alt="showcase-img"/>
        <img className="showcase-img" src={'/img/RollerSkatingDoodle.png'} alt="showcase-img"/>
      </div>

      <article>
        <h1>spend top 10 rich person's money</h1>
        <p>
          choose your desired billionare buy everything you want and spend all
          money.well, of course this is fake, you can't spend their money in
          reality, this is just a game :)
        </p>
      </article>
    </section>
  );
};

export default Showcase;
