import jwt from "jwt-decode";
import { userActionsTypes } from "../../actions-types";

export default (state, { type, payload }) => {
  switch (type) {
    case userActionsTypes.LOGIN_USER_START:
      return {
        ...state,
        loginUser: { ...state.login, message: "", loading: true, errors: {} },
      };
    case userActionsTypes.LOGIN_USER_END:
      return {
        ...state,
        loginUser: { ...state.login, loading: false },
      };
    case userActionsTypes.LOGIN_USER_SUCCESS:
      const userToken = jwt(payload.data.token);
      localStorage.user = JSON.stringify(userToken);
      localStorage.tokenUser = payload.data.token;
      return {
        ...state,
        isAuth: true,
        profile: userToken,
        token: payload.data.token,
        loginUser: { loading: false, message: payload.message, errors: {} },
      };
    case userActionsTypes.LOGIN_USER_FAILURE:
      return {
        ...state,
        loginUser: {
          loading: false,
          message: "",
          errors: payload.details || payload.errors || payload.error,
        },
      };
    default:
      return null;
  }
};
