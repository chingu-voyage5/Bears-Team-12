import { connect } from 'react-redux'

import ItemForm from './ItemForm'
import { changeItemFormInput } from '../../../actions/ItemForm'

const mapStateToProps = ({ ItemFormReducer: { name, price, type, soup } }) => ({
  name,
  price,
  type,
  soup,
})

const mapDispatchToProps = dispatch => ({
  handleInputChange: event => {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    dispatch(changeItemFormInput(name, value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemForm)
