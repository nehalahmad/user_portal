import React, { Component } from "react";
import { Form, Col, Row } from "react-bootstrap";

import FormInput from "./FormInput";
import ButtonContainer from "./ButtonContainer";

import * as Locales from "../config/appConstants";

export default class AddCustomerForm extends Component {
  render() {
    const { handleOnReset, readOnly, customer } = this.props;

    return (
      <Form
        onSubmit={this._handleOnSubmit}
        onReset={handleOnReset}
        name="add_customer_form"
      >
        <fieldset>
          <legend>{Locales.ADD_CUSTOMER}</legend>

          <FormInput
            controlId="acName"
            fldLabel={Locales.NAME_STR}
            fldPlaceholder={Locales.NAME_PLACEHOLDER}
            value={(customer && customer.name) || ""}
            readOnly={readOnly}
          />
          <FormInput
            controlId="acAge"
            fldLabel={Locales.AGE_STR}
            fldPlaceholder={Locales.AGE_PLACEHOLDER}
            type="number"
            value={(customer && customer.age) || ""}
            readOnly={readOnly}
          />
          <FormInput
            controlId="acDescription"
            fldLabel={Locales.DESCRIPTION_STR}
            fldPlaceholder={Locales.DESCRIPTION_PLACEHOLDER}
            value={(customer && customer.description) || ""}
            readOnly={readOnly}
          />
          <FormInput
            controlId="acMobileNumber"
            fldLabel={Locales.MOBILE_NUM_STR}
            fldPlaceholder={Locales.MOBILE_NUM_PLACEHOLDER}
            value={(customer && customer.mobile) || ""}
            readOnly={readOnly}
          />
          <Form.Group as={Row} controlId="acType">
            <Form.Label column sm="4">
              {Locales.TYPE_STR}
            </Form.Label>
            <Col sm={8}>
              <Form.Check
                type="radio"
                label={Locales.TYPE_CORPORATE_STR}
                name="acType"
                inline
                defaultChecked={customer && customer.type.corporate}
                readOnly={readOnly}
              />
              <Form.Check
                type="radio"
                label={Locales.TYPE_REGULAR_STR}
                name="acType"
                inline
                defaultChecked={customer && customer.type.regular}
                readOnly={readOnly}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="acLPSubscribed">
            <Form.Label column sm="4">
              {Locales.LOYAL_PRGRM_SUBS}
            </Form.Label>
            <Col sm={8}>
              <Form.Check
                type="checkbox"
                defaultChecked={customer && customer.loyalProgramSubscribed}
                readOnly={readOnly}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="acPickupDate">
            <Form.Label column sm="4">
              {Locales.PICKUP_DATE_STR}
            </Form.Label>
            <Col sm={8} />
          </Form.Group>
          <FormInput
            controlId="acCharges"
            fldLabel={Locales.CHARGES_STR}
            fldPlaceholder={Locales.CHARGES_PLACEHOLDER}
            value={customer && customer.charges}
            readOnly={readOnly}
          />
          <FormInput
            controlId="acNumberOfEmp"
            fldLabel={Locales.NUMBER_EMP}
            type="number"
            value={customer && customer.numberOfEmployees}
            readOnly={readOnly}
          />
          <FormInput
            controlId="acDistanceTravelled"
            fldLabel={Locales.DISTANCE_TRAVELLED}
            fldPlaceholder={Locales.DISTANCE_TRAVELLED_PLACEHOLDER}
            type="number"
            value={customer && customer.distanceTravelled}
            readOnly={readOnly}
          />
        </fieldset>

        {!readOnly && <ButtonContainer customer={customer} />}
      </Form>
    );
  }

  _handleOnSubmit = e => {
    e.preventDefault();

    const customer = {
      name: document.getElementById("acName").value,
      age: document.getElementById("acAge").value,
      description: document.getElementById("acDescription").value,
      mobileNumber: document.getElementById("acMobileNumber").value,
      type: {
        regular: !!document.add_customer_form.acType.value,
        corporate: !document.add_customer_form.acType.value
      },
      loyalProgramSubscribed: document.getElementById("acLPSubscribed").checked,
      pickupDate: new Date(),
      charges: document.getElementById("acCharges").value,
      numberOfEmployees: document.getElementById("acNumberOfEmp").value,
      distanceTravelled: document.getElementById("acDistanceTravelled").value
    };

    const { handleOnSubmit } = this.props;

    handleOnSubmit(customer);
  };
}
