export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {friends: state.friends + 1}
    case 'REMOVE_FRIEND':
      return {friends: state.friends - 1}
    default:
      return state;
  }
}
