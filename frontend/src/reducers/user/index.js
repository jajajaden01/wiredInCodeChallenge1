import { user as initialState } from '../../store/initialState';

import clearUserStoreReducer from './clearUserStoreReducer';
import createUser from './createUser';
import loginUser from './loginReducer';


export default (state = initialState, action) => {
    const clearUserStore = clearUserStoreReducer(state, action);
    const create = createUser(state, action);
    const login = loginUser(state, action);

    return (
        clearUserStore
        || create
        || login
        || state
    );
};