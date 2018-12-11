import { GET_PRODUCTS, PRODUCTS_LOADING } from './types';
import axios from 'axios';


export const getProducts =  () => async dispatch => {
    dispatch(setProductsLoading());
    let json = await axios
        .get('/api/products')
        .then(res =>
            dispatch({
                type: GET_PRODUCTS,
                payload: res.data
            })
        )
        return json;
}

export const setProductsLoading = () => {
    return {
        type: PRODUCTS_LOADING
    }
}