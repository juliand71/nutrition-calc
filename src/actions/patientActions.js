const setPatient = (patient) => {
  return {
    type: "SET_PATIENT",
    payload: patient
  };
}
const setAge = (age) => {
  return {
    type: "SET_AGE",
    payload: age
  };
}

const setGender = (gender) => {
  return {
    type: "SET_GENDER",
    payload: gender
  };
}

const setWeightKG = (weight) => {
  return {
    type: "SET_KG",
    payload: weight
  };
}

const setWeightLB = (weight) => {
  return {
    type: "SET_LB",
    payload: weight
  };
}

const setHeightCM = (height) => {
  return {
    type: "SET_CM",
    payload: height
  };
}

const setHeightIN = (height) => {
  return {
    type: "SET_IN",
    payload: height
  };
}

const setPAL = (pal) => {
  return {
    type: "SET_PAL",
    payload: pal
  };
}

export default {
  setPatient,
  setAge,
  setGender,
  setWeightKG,
  setWeightLB,
  setHeightCM,
  setHeightIN,
  setPAL,
}