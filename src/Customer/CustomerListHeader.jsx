import React from "react";
import { Row, Col } from "react-bootstrap";

const CustomerListHeader = props => {
  return (
    <Row>
      <Col className="table-header">Name</Col>
      <Col className="table-header">Type</Col>
      <Col className="table-header">Description</Col>
      <Col className="table-header text-center">Charges</Col>
      <Col className="table-header text-center">Action</Col>
    </Row>
  );
};

export default CustomerListHeader;
