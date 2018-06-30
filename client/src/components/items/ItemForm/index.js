import { connect } from "react-redux";
import { withHandlers, compose } from "recompose";
import axios from "axios";

import ItemForm from "./ItemForm";
import { changeItemFormInput } from "../../../actions/ItemForm";

const mapStateToProps = ({ ItemFormReducer: { name, price, type, soup } }) => ({
  name,
  price,
  type,
  soup
});

const mapDispatchToProps = dispatch => ({
  handleInputChange: event => {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    dispatch(changeItemFormInput(name, value));
  }
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withHandlers({
    handleSubmit: props => async event => {
      const { name, price, type } = props;
      axios.post("/api/items", { name, price, type });
    }
  })
)(ItemForm);
