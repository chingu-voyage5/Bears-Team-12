import React from 'react'

const ItemForm = (props) => {
  const { name, price, handleInputChange, handleSubmit } = props
  return (
    <form onSubmit={handleSubmit} onChange={handleInputChange}>
      <label>
        Name:
        <input
          name='name'
          type='text'
          value={name}
          required
        />
      </label>
      <br />
      <label>
        Price:
        <input
          name='price'
          type='number'
          value={price}
          required
        />
      </label>
      <br />
      <label>
        Type:
        <select name='type'>
          <option value='adult'>Adult</option>
          <option value='children'>Children</option>
          <option value='soup'>Soup</option>
        </select>
      </label>
      <br />
      <input type='submit' value='Submit' />
    </form>
  )
}

export default ItemForm
