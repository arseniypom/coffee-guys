const initialState = {
  items: {},
  totalPrice: 0,
  itemsCount: 0
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COFFEE_TO_CART':
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id], action.payload]
      }
      const allCartItemsArray = [].concat.apply([], Object.values(newItems))
      return {
        ...state,
        items: newItems,
        totalPrice: allCartItemsArray.reduce((acc, currItem) => acc + currItem.price, 0),
        itemsCount: allCartItemsArray.length,
      }

    default:
      return state;
  }
};

export default cart;