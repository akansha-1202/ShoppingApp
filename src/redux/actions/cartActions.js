import axios from "axios";
import * as actionType from "../constants/cartConstants";

const URL = "https://e-com-server-4tx7wd1ou-akansha-1202.vercel.app/api";

export const addToCart = (id, quantity) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/product/${id}`);

    dispatch({ type: actionType.ADD_TO_CART, payload: { ...data, quantity } });
  } catch (error) {
    dispatch({ type: actionType.ADD_TO_CART_ERROR, payload: error.message });
  }
};

export const removeFromCart = (id) => async (dispatch) => {
  dispatch({ type: actionType.REMOVE_FROM_CART, payload: id });
};


// actions.js
export const fetchItems = () =>async (dispatch) => {
    try {
      const response = await fetch('/api/items'); // Replace with your API endpoint
      const data = await response.json();
      dispatch({
        type: 'FETCH_ITEMS_SUCCESS',
        items: data
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_ITEMS_FAILURE',
        error: 'Error fetching items'
      });
    }
  };
