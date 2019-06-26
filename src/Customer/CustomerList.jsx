import React from "react";
import CustomerListHeader from "./CustomerListHeader";

import CustomerRow from "./CustomerRow";

const CustomerList = ({ customers, handleOnDeleteClick }) => {
  if (!customers.length) {
    return null;
  }

  return (
    <ul>
      <CustomerListHeader />
      {customers.map((customer, index) => (
        <CustomerRow
          key={customer.id}
          customer={customer}
          handleOnDeleteClick={handleOnDeleteClick}
        />
      ))}
    </ul>
  );
};

export default CustomerList;
