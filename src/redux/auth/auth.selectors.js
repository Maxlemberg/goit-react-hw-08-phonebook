const getIsAuthenticated = state => state.auth.isAuthenticated;

const getEmail = state => state.auth.user.email;

export { getIsAuthenticated, getEmail };
