import conditions from '../conditions';

function findConditionByName(conditionArray, name) {
  for (var c of conditionArray) {
    console.log(c.name)
    console.log(name)
    if (c.name === name) {
      return c;
    }
  }
}

const currentConditions = (state=[], action) => {

  switch (action.type) {
    case "SET_CONDITION":
      console.log(action.payload)
      let current = [];
      for (var item of action.payload) {
        var newCondition = findConditionByName(conditions, item)
        console.log(newCondition)
        current.push(newCondition);
        console.log(current)
      }
      return current;
      
    default:
      return state;
  }
}

export default currentConditions;