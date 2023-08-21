import * as actionTypes from "../constants/productConstant";
import axios from "axios";

const URL = "https://e-com-server-4tx7wd1ou-akansha-1202.vercel.app/api";
//using thunk as middleware
export const getProducts = () => async (dispatch) => {
  try {
    // Dispatch an action to indicate that the request has started (optional)
    dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });

    const { data } = await axios.get(`${URL}/products `); //it extracted from response->data[]->data
    console.log(data);
    dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.response });
  }
};

//using thunk as middleware
export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`${URL}/product/${id}`);

    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
      payload: error.response,
    });
  }
};

export const getProductDetailsCategory = (brand) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`${URL}/products/${brand}`);

    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
      payload: error.response,
    });
  }
};

// export const removeProductDetails = () => (dispatch) => {

//     dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_RESET });

// };

// let response = {
//     config : {},
//     data : [],
//     headers : {},
//     status : 200,
//     message : ""
// }

// response.data
// {data} = response
