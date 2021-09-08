/* eslint-disable no-case-declarations */
const ADD_ROCKS = 'Space-Hub/rockets/ADD_ROCKS';
const RESERVE_ROCKET = 'Space-Hub/rockets/RESERVE_ROCKET';

const initialState = [];

export const addrocks = (payload) => ({
  type: ADD_ROCKS,
  payload,
});

export const reserverocket = (payload) => (
  {
    type: RESERVE_ROCKET,
    payload,
  }
);

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
    case RESERVE_ROCKET:
      return state.map((obj) => {
        if (obj.id === parseInt(action.payload, 10)) {
          return { ...obj, reserved: true };
        }
        return { ...obj };
      });
    default:
      return state;
  }
};
export default rocksReducer;
