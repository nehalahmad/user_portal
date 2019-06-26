import React, { Component } from "react";
import { connect } from "react-redux";

import AddCustomer from "./AddCustomer";

class ShowCustomer extends Component {
  render() {
    const { customers, match } = this.props;
    const customer = customers.find(
      customer => customer.id === Number(match.params.id)
    );

    return <AddCustomer customer={customer} readOnly id={match.params.id} />;
  }
}

const mapStateToProps = state => ({
  customers: state
});

export default connect(mapStateToProps)(ShowCustomer);
