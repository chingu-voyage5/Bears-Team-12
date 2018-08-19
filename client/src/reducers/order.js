// This reducer controls the state of the Order object, which tracks the current
// order being submitted on the client side. The Order object is what will be
// be rendered by OrderReceipt, and OrderOverview.

// ADD_ITEM should add whichever item was clicked to the Order state object
// REMOVE_ITEM should remove one item of whatever type was clicked from the
// Order state object.
// APPLY_DISCOUNT should remove 5 euros from the total Order cost
// CHANGE_NAME should change the name assigned to the current order
// CHANGE_TABLE should change the table assigner to the current order
// SUBMIT should send the order to the OrderReceipt phase and prepare that order to be persisted.

// The Order object should have properties for name, table, items, total/cost
// discount,
const initialState = {
  name: '',
  table: null,
  status: 'pending', //
  discount: null,
  notes: '',
  items: []
};
export const OrderReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
