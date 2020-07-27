import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header className="no-print">
      <Link to={'/'}>
      <h1 className="heading">Spend celebrities money</h1>
      </Link>

    </header>
  );
};

export default Header;
