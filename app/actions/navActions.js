export function changeNav(newNav) {
  return {
    type: "CHANGE_NAV",
    payload: newNav
  }
}

export function changeColor(color) {
  return {
    type: "CHANGE_COLOR",
    payload: color
  }
}
