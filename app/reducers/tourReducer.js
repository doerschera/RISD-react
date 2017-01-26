export default function reducer(
  state={
    stop: 0,
    start: true,
    all: false
  },
action) {

  switch(action.type) {
    case 'START_TOUR':
      return {...state, start: false};

    case 'NEXT_STOP':
      return {...state, stop: state.stop + 1};

    case 'PREV_STOP':
      return {...state, stop: state.stop - 1};

    case 'ALL_STOPS':
      return {...state, all: true};

    case 'BACK':
      return {...state, all: false};

    default:
      return state;
  }
}
