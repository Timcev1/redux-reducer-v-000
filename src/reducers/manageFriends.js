export function manageFriends(state = {
  friends: [],
}, action){
  switch (action.type) {
    case "ADD_FRIEND":
      return Object.assign({}, state {
        friends: [
          ...state.friends,
          action.friend
        ]
      });
      
      break;
    default:
      
  }
}
