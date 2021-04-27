// import conditions from '../conditions';

const setConditions = (conditionList) => {
  return {
    type: "SET_CONDITION",
    payload: conditionList
  }
};

export default {
  setConditions
};