import { messageActionsTypes } from '../../actions-types';

export default (state, { type, payload }) => {
    switch (type) {
        case messageActionsTypes.GET_MESSAGE_START:
            return {
                ...state,
                fetchMessage: { ...state.fetchMessage, message: '', loading: true, errors: {} }
            };
        case messageActionsTypes.GET_MESSAGE_END:
            return {
                ...state,
                fetchMessage: { ...state.fetchMessage, loading: false }
            };
        case messageActionsTypes.GET_MESSAGE_SUCCESS:
            return {
                ...state,
                listOfMessage: [...payload.data],
                fetchMessage: { loading: false, message: payload.message, errors: {} }
            };
        case messageActionsTypes.GET_MESSAGE_FAILURE:
            return {
                ...state,
                fetchMessage: { loading: false, message: '', errors: { message: payload.message, ...payload.errors } }
            };
        default:
            return null;
    }
};
