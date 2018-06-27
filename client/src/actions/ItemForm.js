export const types = {
  CHANGE_ITEM_FORM_INPUT: 'CHANGE_ITEM_FORM_INPUT',
}

export const changeItemFormInput = (name, value) => ({
  type: types.CHANGE_ITEM_FORM_INPUT,
  payload: {
    name,
    value,
  }
})
