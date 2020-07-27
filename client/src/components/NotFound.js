import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="container">
      <h1 className="not-found-header">PAGE NOT FOUND</h1>
      <img src="/img/404.png" className="not-found-img" alt="404" />
      <Link to="/">
        <button className="btn btn-primary btn-center btn-big"> GO TO HOME PAGE</button>
      </Link>
    </section>
  );
};

export default NotFound;
