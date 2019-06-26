import customers from "./../data/customerData";
import {
  REMOVE_CUSTOMER,
  ADD_CUSTOMER,
  UPDATE_CUSTOMER
} from "./customerActionList";

function customersReducer(state = customers, action) {
  switch (action.type) {
    case REMOVE_CUSTOMER: {
      state.splice(action.index, 1);
      return [...state];
    }
    case ADD_CUSTOMER: {
      return [...state, action.customer];
    }
    case UPDATE_CUSTOMER: {
      state.splice(action.index, 1, action.customer);

      return [...state];
    }
    default:
      return state;
  }
}

export default customersReducer;
