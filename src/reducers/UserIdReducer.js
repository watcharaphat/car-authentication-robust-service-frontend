const initialState = '1';

export const userId = (state = initialState, payload) => {
  switch (action.type) {
    case 'SET_USER_ID':
      return action.payload;
    default:
      return state;
  }
};
