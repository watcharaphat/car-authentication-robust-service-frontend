export const setUserId = (id) => dispatch => {
  dispatch({
    type: 'SET_USER_ID',
    payload: id,
  });
};
