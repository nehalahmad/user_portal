import React, { Component, Fragment } from "react";
import { Form, Col, Row } from "react-bootstrap";

export default class FormInput extends Component {
  render() {
    const {
      controlId,
      fldLabel,
      fldPlaceholder,
      type,
      value,
      readonly
    } = this.props;

    return (
      <Fragment>
        <Form.Group as={Row} controlId={controlId}>
          <Form.Label column sm="4">
            {fldLabel}
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              placeholder={fldPlaceholder}
              type={type}
              defaultValue={value}
              readOnly={readonly}
            />
          </Col>
        </Form.Group>
      </Fragment>
    );
  }
}

FormInput.defaultPropTypes = {
  type: "text"
};
