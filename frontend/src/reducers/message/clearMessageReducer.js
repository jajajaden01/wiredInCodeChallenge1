import { messageActionsTypes } from '../../actions-types';

export default (state, { type }) => {
    switch (type) {
        case messageActionsTypes.CLEAR_MESSAGE_STORE:
            return {
                ...state,
                createProduct: {
                    loading: false,
                    message: '',
                    errors: {}
                },
            };

        default:
            return null;
    }
};
