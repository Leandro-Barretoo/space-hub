const ADD_ROCKS = 'Space-Hub/rockets/ADD_ROCKS';

const initialState = [];

export const addrocks = (payload) => ({
  type: ADD_ROCKS,
  payload,
});

const rocksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROCKS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
export default rocksReducer;
