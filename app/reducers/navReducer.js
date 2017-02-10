export default function reducer(state={
  navList: ['Experience', 'Tour', 'Ask']
}, action) {
  switch(action.type) {
    case "CHANGE_NAV":
      return {...state, navList: action.payload}

    default:
      return state;
  }
}
