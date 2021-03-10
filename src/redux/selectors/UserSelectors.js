//////////////
// SELECTOR //
//////////////
// A function that accepts Redux state as an argument and returns data that is derived from that state.

export const userSelector = (state) => state.user;
export const usernameSelector = (state) => state.user.username;
export const userIdSelector = (state) => state.user.id;
export const userRoleSelector = (state) => state.user.role;