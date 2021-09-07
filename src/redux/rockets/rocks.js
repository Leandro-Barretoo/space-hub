/* eslint-disable no-case-declarations */
const ADD_ROCKS = 'Space-Hub/rockets/ADD_ROCKS';

const initialState = [];

export const addrocks = (payload) => ({
  type: ADD_ROCKS,
  payload,
});

const rocksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROCKS:
      const newPayload = action.payload.map((obj) => {
        const {
          id, rocket_name: name, rocket_type: type, flickr_images: image, description,
        } = obj;
        return {
          id, name, type, image, description,
        };
      });
      return [...state, ...newPayload];
    default:
      return state;
  }
};
export default rocksReducer;
