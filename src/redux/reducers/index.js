import { ADD_ITEM, REMOVE_ITEM } from "../actions";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
};

const productReducer = (state = initialState, action) => {
  console.log("Action received:", action);
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, cartItems: [...state.cartItems, action.payload] };

    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ), 
      };
    default:
      return state;
  }
};

export default productReducer;

