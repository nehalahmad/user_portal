import React from "react";
import { Form, Row, Button, Col } from "react-bootstrap";
import { SAVE_STR, RESET_STR, AL_UPDATE } from "../config/appConstants";

const ButtonContainer = ({ customer }) => {
  return (
    <Form.Group as={Row} className="button-container">
      <Col sm={{ span: 3, offset: 4 }}>
        <Button type="submit" variant="primary">
          {customer && customer.mobile ? AL_UPDATE : SAVE_STR}
        </Button>
        <Button type="reset" variant="default">
          {RESET_STR}
        </Button>
      </Col>
    </Form.Group>
  );
};

export default ButtonContainer;
