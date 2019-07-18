import { RECEIVE_ALL_PROGRAMS } from "./actions";
import { RECEIVE_PROGRAM_WORKOUTS } from "./actions";

const initialState = {
  programs: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_ALL_PROGRAMS:
      return {
        ...state,
        programs: action.programs.map(program => {
          return {
            ...program,
            workouts: []
          };
        })
      };
    case RECEIVE_PROGRAM_WORKOUTS:
      console.log("hello");
      return {
        ...state,
        programs: state.programs.map(program => {
          console.log(action.workouts);
          return {
            ...program,
            workouts:
              program.id === action.workouts.program_id
                ? action.workouts
                : program.workouts
          };
        })
      };
    default:
      return state;
  }
}

export default reducer;
