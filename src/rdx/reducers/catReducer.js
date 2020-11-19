import * as c from "../actions/types";

const initialAuthState = {
    category: null,
  };

  export default (state = initialAuthState, action) => {
    switch (action.type) {
      case c.ADDED_MUSIC:
        return {
          ...state,
          category: "music" | "conversation" | "exercise",
        };
      default:
        return state;
    }
  };

  // const tasks = [{
  //   description: 'Listen to Song',
  //   createdAt: new Date(),
  //   completedAt: null,
  //   points: 10,
  //   type: 'sugg' | 'blocker',
  //   category: 'music',
  // },{
  //  ... another one
  // }]