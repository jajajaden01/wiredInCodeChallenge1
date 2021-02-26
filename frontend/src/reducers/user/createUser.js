import { userActionsTypes } from "../../actions-types";

export default (state, { type, payload }) => {
  switch (type) {
    case userActionsTypes.CREATE_USER_START:
      return {
        ...state,
        createUser: {
          ...state.createUser,
          message: "",
          loading: true,
          errors: {},
        },
      };
    case userActionsTypes.CREATE_USER_END:
      return {
        ...state,
        createUser: { ...state.createUser, loading: false },
      };
    case userActionsTypes.CREATE_USER_SUCCESS:
      localStorage.userDetails = JSON.stringify(payload.data.userDetails);
      return {
        ...state,
        createUser: { loading: false, message: payload.message, errors: {} },
      };
    case userActionsTypes.CREATE_USER_FAILURE:
      return {
        ...state,
        createUser: {
          loading: false,
          message: "",
          errors: payload.details || payload.errors || payload.error,
        },
      };
    default:
      return null;
  }
};
