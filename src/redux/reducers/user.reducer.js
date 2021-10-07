const userReducer = (state = {}, action) => {
  // debugger;
  switch (action.type) {
    case 'SET_USER':
      console.log(action.payload)
      return action.payload;
    case 'UNSET_USER':
      return {};
    default:
      console.log(state)
      return state;
  }
};

// user will be on the redux state at:
// state.user

export default userReducer;