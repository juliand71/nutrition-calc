const initialState = {
  leftLeg: false,
  leftCalf: false,
  leftFoot: false,
  rightLeg: false,
  rightCalf: false,
  rightFoot: false
}

const currentAmputations = (state=initialState, action) => {
  switch (action.type) {
    case "SET_AMPUTATIONS":
      let newAmps = Object.assign({}, action.payload);
      if (newAmps.rightLeg) {
        newAmps.rightCalf = true;
        newAmps.rightFoot = true;
      }
      if (newAmps.rightCalf) {
        newAmps.rightFOot = true;
      }

      if (newAmps.leftLeg) {
        newAmps.leftCalf = true;
        newAmps.leftFoot = true;
      }
      if (newAmps.leftCalf) {
        newAmps.leftFOot = true;
      }
      return newAmps;
    default:
      return state;
  }
}

export default currentAmputations;