import {
  REMOVE_CUSTOMER,
  ADD_CUSTOMER,
  UPDATE_CUSTOMER
} from "./customerActionList";

// remove customer action
export function removeCustomer(index) {
  return {
    type: REMOVE_CUSTOMER,
    index
  };
}

export function addCustomer(customer) {
  return {
    type: ADD_CUSTOMER,
    customer
  };
}

export function updateCustomer(customer, index) {
  return {
    type: UPDATE_CUSTOMER,
    customer,
    index
  };
}
