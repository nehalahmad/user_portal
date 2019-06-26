import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import CustomersContainer from "./CustomersContainer";

import { DELETE_CONFIRMATION } from "../config/appConstants";
import * as CustomerActions from "./customerAction";

class Customers extends Component {
  constructor(props) {
    super(props);

    this.handleOnDeleteClick = this.handleOnDeleteClick.bind(this);
  }

  render() {
    return (
      <CustomersContainer
        {...this.props}
        handleOnDeleteClick={this.handleOnDeleteClick}
      />
    );
  }

  handleOnDeleteClick(id) {
    const { removeCustomer, customers } = this.props;

    if (window.confirm(DELETE_CONFIRMATION)) {
      const customerIndex = customers.findIndex(cust => cust.id === id);

      removeCustomer(customerIndex);
    }
  }
}

const mapStateToProps = state => ({
  customers: state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CustomerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Customers);
