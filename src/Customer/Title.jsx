import React from "react";
import { Link } from "react-router-dom";

import { CUSTOMER_LIST } from "../config/appConstants";

const Title = props => (
  <div className="title-container">
    <h1>{CUSTOMER_LIST}</h1>
    <Link className="add-customer" to="/AddCustomer">
      +
    </Link>
  </div>
);

export default Title;
