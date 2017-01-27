export function startTour() {
  return {
    type: 'START_TOUR'
  }
}

export function nextStop() {
  return {
    type: 'NEXT_STOP'
  }
}

export function prevStop() {
  return {
    type: 'PREV_STOP'
  }
}

export function allStops() {
  return {
    type: 'ALL_STOPS'
  }
}

export function back() {
  return {
    type: 'BACK'
  }
}

export function goToStop(stopNumber) {
  return {
    type: "GO_TO_STOP",
    payload: stopNumber
  }
}
