import React, { Component } from "react";
import Container from "react-bootstrap/Container";

import CustomerList from "./CustomerList";
import Title from "./Title";

import "./CustomerStyles.css";

export default class CustomersContainer extends Component {
  render() {
    const { customers, handleOnDeleteClick } = this.props;

    return (
      <Container className="App">
        <Title />
        <CustomerList
          customers={customers}
          handleOnDeleteClick={handleOnDeleteClick}
        />
      </Container>
    );
  }
}
