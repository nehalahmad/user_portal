import React, { Fragment } from "react";
import { Route } from "react-router-dom";

import Customers from "./Customer";
import AddCustomer from "./Customer/AddCustomer";
import UpdateCustomer from "./Customer/UpdateCustomer";
import ShowCustomer from "./Customer/ShowCustomer";

import "./assets/css/styles.css";

function App() {
  return (
    <Fragment>
      <Route exact path="/" render={() => <Customers />} />
      <Route
        path="/AddCustomer"
        render={({ history }) => <AddCustomer history={history} />}
      />
      <Route
        path="/ShowCustomer/:id"
        render={params => <ShowCustomer {...params} />}
      />
      <Route
        path="/UpdateCustomer/:id"
        render={params => <UpdateCustomer {...params} />}
      />
    </Fragment>
  );
}

export default App;
