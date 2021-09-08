const ADD_MISSION = 'spaceHub/missions/ADD_MISSION';
const JOIN_MISSION = 'spaceHub/missions/JOIN_MISSION';
const LEAVE_MISSION = 'spaceHub/missions/LEAVE_MISSION';

const initialState = [];

export const addMission = (payload) => ({
  type: ADD_MISSION,
  payload,
});

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MISSION:
      return [...state, action.payload];
    case JOIN_MISSION:
    case LEAVE_MISSION:
      return state.map((mission) => {
        if (mission.mission_id !== action.payload) {
          return mission;
        }
        return {
          ...mission,
          reserved: !mission.reserved,
        };
      });
    default:
      return state;
  }
};

export default missionsReducer;
