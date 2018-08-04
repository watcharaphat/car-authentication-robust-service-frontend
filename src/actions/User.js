export const setUserId = (id) => dispatch => {
  dispatch({
    type: 'SET_USER_ID',
    payload: id,
  });
};

export const setUsersKey = (users) => dispatch => {
  dispatch({
    type: 'SET_USERS_KEY',
    payload: users,
  });
};
