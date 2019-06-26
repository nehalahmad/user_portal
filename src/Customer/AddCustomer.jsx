import React, { Component } from "react";
import AddCustomerForm from "./AddCustomerForm";
import { Container } from "react-bootstrap";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as CustomerActions from "./customerAction";

class AddForm extends Component {
  constructor(props) {
    super(props);

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnReset = this.handleOnReset.bind(this);
  }

  render() {
    return (
      <Container className="App">
        <AddCustomerForm
          handleOnSubmit={this.handleOnSubmit}
          handleOnReset={this.handleOnReset}
          {...this.props}
        />
      </Container>
    );
  }

  handleOnSubmit(customer) {
    const { history, match } = this.props;
    if (match && match.params && match.params.id) {
      this._updateCustomer(customer);
    } else {
      this._addCustomer(customer);
    }

    history.push("/");
  }

  _addCustomer(customer) {
    const { customers, addCustomer } = this.props;

    customer.id = customers.length + 1; // make id keys as auto increment
    addCustomer(customer);
  }

  _updateCustomer(customer) {
    const { match, customers, updateCustomer } = this.props;

    customer.id = Number(match.params.id);
    const customerIndex = customers.findIndex(cust => cust.id === customer.id);
    updateCustomer(customer, customerIndex);
  }

  handleOnReset() {}
}

const mapStateToProps = state => ({
  customers: state
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CustomerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddForm);
