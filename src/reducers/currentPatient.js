import Nutrition from "../Nutrition";
var assert = require("assert");

const currentPatient = (state={
  gender: 'female',
  age: 18,
  weightKG: 45.35,
  weightLB: 100,
  heightCM: 152.4,
  heightIN: 60,
  pal: [1.2, 2.0],
}, action) => {
  switch (action.type) {
    case "SET_AGE":
      return {
        ...state,
        age: action.payload
      }
    case "SET_GENDER":
      return {
        ...state,
        gender: action.payload
      }
    case "SET_KG":
      let lbconversion = Nutrition.convertUnits("weightKG", action.payload);
      assert(lbconversion.convertedUnit === "weightLB");
      return {
        ...state,
        weightKG: action.payload,
        weightLB: lbconversion.convertedValue,
      }
    case "SET_LB":
      let kgconversion = Nutrition.convertUnits("weightLB", action.payload);
      assert(kgconversion.convertedUnit === "weightKG");
      return {
        ...state,
        weightLB: action.payload,
        weightKG: kgconversion.convertedValue
      }
    case "SET_CM":
      let inconversion = Nutrition.convertUnits("heightCM", action.payload);
      assert(inconversion.convertedUnit === "heightIN");
      return {
        ...state,
        heightCM: action.payload,
        heightIN: inconversion.convertedValue
      }
    case "SET_IN":
      let cmconversion = Nutrition.convertUnits("heightIN", action.payload);
      assert(cmconversion.convertedUnit === "heightCM");
      return {
        ...state,
        heightIN: action.payload,
        heightCM: cmconversion.convertedValue
      }
    case "SET_PAL":
      return {
        ...state,
        pal: action.payload
      }
    default:
      return state;
  }
}

export default currentPatient;