export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {count: state.friends + 1}
    case 'REMOVE_FRIEND':
      return {count: state.friends - 1}
    default:
      return state;
  }
}
