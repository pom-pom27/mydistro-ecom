import UserType from "./user.type";

export const setCurrentUser = (user) => ({
  type: UserType.SET_CURRENT_USER,
  payload: user,
});
