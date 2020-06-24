import React from "react";
const Results = ({ location }) => {
  let purchsedItems = location.state;
  console.log(purchsedItems);

  return (
    <section>
      {purchsedItems.map((item, i) => (
        <div key={i + item} className="inside-grid">
          <h1>
            {item.name}:{item.qty}
          </h1>
        </div>
      ))}
    </section>
  );
};

export default Results;
