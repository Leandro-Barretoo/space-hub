const ADD_ROCKS = 'space-hub/rocks/ADD_ROCKS';

const initialState = [];

export const addrocks = (payload) => ({
  ADD_ROCKS,
  payload,
});

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROCKS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default bookReducer;
