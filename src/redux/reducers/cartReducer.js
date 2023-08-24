import * as actionTypes from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload;

      const existItem = state.cartItems.find(
        (product) => product.id === item.id
      );

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((data) =>
            data.product === existItem.product ? item : data
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
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


    case actionTypes.INCREMENT_QUANTITY:
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
  
    case actionTypes.DECREMENT_QUANTITY:
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity } : item
          ),
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
    
