import React, { Component } from "react";
import { connect } from "react-redux";

import AddCustomer from "./AddCustomer";

class UpdateCustomer extends Component {
  render() {
    const { customers, match } = this.props;
    const customer = customers.find(
      (customer, index) => customer.id === Number(match.params.id)
    );

    return <AddCustomer customer={customer} {...this.props} />;
  }
}

const mapStateToProps = state => ({
  customers: state
});

export default connect(mapStateToProps)(UpdateCustomer);
