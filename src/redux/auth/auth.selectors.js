const getIsAuthenticated = state => state.auth.token;

const getEmail = state => state.auth.user.email;

export { getIsAuthenticated, getEmail };
