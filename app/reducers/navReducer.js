export default function reducer(state={
  navList: ['Experience', 'Tour', 'Ask'],
  navColor: '#4dd2ff'
}, action) {
  switch(action.type) {
    case "CHANGE_NAV":
      return {...state, navList: action.payload}

    case "CHANGE_COLOR":
      return {...state, navColor: action.payload}

    default:
      return state;
  }
}
