export const getTotal = (basket) =>
  basket.reduce((amont, item) => {
    return amont + item.price;
  }, 0);

// State
export const initialState = {
  basket: [],
  user: null,
};

export default function AppReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("can't remove item");
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "EMPTY":
      return {
        ...state,
        basket: [],
      };
    default:
      return state;
  }
}
