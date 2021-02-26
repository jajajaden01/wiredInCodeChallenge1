import { message as initialState } from '../../store/initialState';

import clearMessageStoreReducer from './clearMessageReducer';
import getMessage from './getMessage';

export default (state = initialState, action) => {
    const clearMessageStore = clearMessageStoreReducer(state, action);
    const getMessages = getMessage(state, action);

    return (
        clearMessageStore
        || getMessages
        || state
    );
};
