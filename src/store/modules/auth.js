const SET_USER = 'SET_USER';

export const login = user => ({
  type: SET_USER,
  user,
});

const initialState = {
  user: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
}
