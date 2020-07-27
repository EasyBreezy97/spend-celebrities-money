import React ,{useEffect} from "react";
const Results = ({ location }) => {
  let purchsedItems = location.state;
  console.log(purchsedItems);

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <>
      <section className="results-section container">
        <h1 className="results-heading">Your fake items 😂🤣😂</h1>
        <table className="results-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {purchsedItems.map((item, i) => (
              <tr key={i + item}>
                <td>
                  <img src={item.img} alt="img" />
                </td>
                <td>{item.name}</td>
                <td>{item.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <button
        onClick={() => {
          window.print();
        }}
        className="btn btn-primary btn-center no-print"
      >
        Print Results
      </button>
    </>
  );
};

export default Results;
