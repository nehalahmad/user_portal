import React from "react";
import { Row, Col } from "react-bootstrap";
import ActionLink from "./ActionLink";

const CustomerRow = props => {
  const {
    customer: {
      name,
      description,
      type: { regular },
      charges
    }
  } = props;

  return (
    <Row as="li">
      <Col className="table-value">{name}</Col>
      <Col className="table-value">{regular ? "Regular" : "Corporate"}</Col>
      <Col className="table-value">{description}</Col>
      <Col className="table-value text-center">{charges}</Col>
      <Col className="table-value">
        <ActionLink {...props} />
      </Col>
    </Row>
  );
};

export default CustomerRow;
