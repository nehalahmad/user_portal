import React from "react";
import { Link } from "react-router-dom";
import { AL_DELETE, AL_UPDATE, AL_DETAILS } from "../config/appConstants";
import { Button } from "react-bootstrap";

const ActionLink = props => {
  return (
    <ul className="list-inline">
      <li className="action-link list-inline-item">
        <Button
          variant="link"
          onClick={() => props.handleOnDeleteClick(props.customer.id)}
        >
          {AL_DELETE}
        </Button>
      </li>
      <li className="action-link list-inline-item">
        <Link to={`/UpdateCustomer/${props.customer.id}`}>{AL_UPDATE}</Link>
      </li>
      <li className="action-link list-inline-item">
        <Link to={`/ShowCustomer/${props.customer.id}`}>{AL_DETAILS}</Link>
      </li>
    </ul>
  );
};

export default ActionLink;
