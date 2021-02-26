import { messageActionsTypes } from '../../actions-types';

export const clearDeleteProduct = payload => dispatch => dispatch({
  type: messageActionsTypes.CLEAR_DELETE_PRODUCT_STORE,
  payload
});