import { messageActionsTypes } from '../../actions-types';
import { apiAction } from '../../helpers';

export default () => dispatch => dispatch(apiAction({
    method: 'get',
    url: '/api/v1/messages',
    onStart: messageActionsTypes.GET_MESSAGE_START,
    onEnd: messageActionsTypes.GET_MESSAGE_END,
    onSuccess: messageActionsTypes.GET_MESSAGE_SUCCESS,
    onFailure: messageActionsTypes.GET_MESSAGE_FAILURE
}));
