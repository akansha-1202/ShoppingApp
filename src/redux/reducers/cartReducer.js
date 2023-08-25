import * as actionTypes from "../constants/cartConstants";

export const cartReducer = (
  state = {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
  action
) => {
  switch (action.type) {

    case actionTypes.ADD_TO_CART:
      const item = action.payload;
      const existItem = state.cartItems.find(
        (product) => product.id === item.id
      );

      if (existItem) {
        console.log("inside if condition");

        return {
          ...state,
          cartItems: state.cartItems.map((data) =>
            data.id === existItem.id ? item : data
          ),
        };
      } else {
        const updatedCartItems = [...state.cartItems, item];

        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

        return {
          ...state,
          cartItems: updatedCartItems,
        };
      }

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (product) => product.id !== action.payload
        ),
      };

    case actionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };

    // case actionTypes.INCREMENT_QUANTITY:
    //   return {
    //     ...state,
    //     cartItems: state.cartItems.map((item) =>
    //       item.id === action.payload.id
    //         ? { ...item, quantity: item.quantity + 1 }
    //         : item
    //     )
    //     localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

    //   };

    // case actionTypes.DECREMENT_QUANTITY:
    //   return {
    //     ...state,
    //     cartItems: state.cartItems.map((item) =>
    //       item.id === action.payload.id
    //         ? {
    //             ...item,
    //             quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
    //           }
    //         : item
    //     ),
    //   };

    case actionTypes.INCREMENT_QUANTITY:
      const updatedCartItemsIncrement = state.cartItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      localStorage.setItem(
        "cartItems",
        JSON.stringify(updatedCartItemsIncrement)
      );

      return {
        ...state,
        cartItems: updatedCartItemsIncrement,
      };

    case actionTypes.DECREMENT_QUANTITY:
      const updatedCartItemsDecrement = state.cartItems
        .map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
              }
            : item
        )
        .filter((item) => item.id !== action.payload.id); // Remove the item with the specified ID

      localStorage.setItem(
        "cartItems",
        JSON.stringify(updatedCartItemsDecrement)
      );

      return {
        ...state,
        cartItems: updatedCartItemsDecrement,
      };

    default:
      return state;
  }
};

// case actionTypes.DECREMENT_QUANTITY:
//   return {
//     ...state,
//     cartItems: state.cartItems.map((item) =>
//       item.id === action.payload.id
//         ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
//         : item
//     ),
//   };

//   case actionTypes.INCREMENT_QUANTITY:
// return {
//   ...state,
//   products: state.products.map((product) =>
//     product.id === action.payload
//       ? { ...product, quantity: product.quantity + 1 }
//       : product
//   ),
// };
// case actionTypes.DECREMENT_QUANTITY:
//   return {
//     ...state,
//     products: state.products.map((product) =>
//       product.id === action.payload && product.quantity > 0
//         ? { ...product, quantity: product.quantity - 1 }
//         : product
//     ),
//   };
