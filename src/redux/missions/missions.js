const ADD_MISSION = 'spaceHub/missions/ADD_MISSION';

const initialState = [];

export const addMission = (payload) => ({
  type: ADD_MISSION,
  payload,
});

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MISSION:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default missionsReducer;
