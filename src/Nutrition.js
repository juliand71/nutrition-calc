/*
*
*/
function calculateMifflin(patient) {
  const {
    age,
    weightKG,
    heightCM,
    gender
  } = patient;
  if (gender === "male") {
    return roundTwoDecimal(10 * weightKG + 6.25 * heightCM - 5 * age + 5);
  } else {
    return roundTwoDecimal(10 * weightKG + 6.25 * heightCM - 5 * age + -161);
  }
}

/*
*
*/
function calculateHB(patient) {
  const {
    age,
    weightKG,
    heightCM,
    gender
  } = patient;

  if (gender === "male") {
    return roundTwoDecimal(66.47 + 13.75 * weightKG + 5 * heightCM - 6.75 * age);
  } else {
    return roundTwoDecimal(655.1 + 9.56 * weightKG + 1.85 * heightCM - 4.68 * age);
  }
}

/*
*
*/
function calculateBMI(patient, amputations) {
  const {
    heightCM,
    weightKG
  } = patient;
  const meters = heightCM / 100;

  return roundTwoDecimal(weightKG / (meters * meters));
}

/*
*
*/
function calculateIDW(patient, amputations) {
  const {
    gender,
    heightIN
  } = patient;

  // use math.round to ensure we get a whole number
  const overSixty = Math.round(heightIN) - 60;

  if (overSixty <= 0) {
    if (gender === 'male') {
      return 106;
    } else {
      return 100;
    }
  }
  if (gender === 'male') {
    return (106 + (6 * overSixty));
  } else {
    return (100 + (5 * overSixty));
  }
}

/*
*
*/
function convertUnits(unit, value) {
  var unitName, unitValue;

  if (unit === "heightIN") {
    unitName = "heightCM";
    unitValue = roundTwoDecimal(value * 2.54);
  } else if (unit === "heightCM") {
    unitName = "heightIN";
    unitValue = roundTwoDecimal(value / 2.54);
  } else if (unit === "weightKG") {
    unitName = "weightLB";
    unitValue = roundTwoDecimal(value * 2.2);
  } else if (unit === "weightLB") {
    unitName = "weightKG";
    unitValue = roundTwoDecimal(value /  2.2);
  } else {
    unitName = undefined;
    unitValue = undefined;
  }

  return {
    convertedUnit: unitName,
    convertedValue: unitValue,
  };
}

/*
*
*/
function roundTwoDecimal(value) {
  return Math.round(value * 100) / 100;
}

/*
*
*/
const Nutrition = {
  calculateMifflin: calculateMifflin,
  calculateBMI: calculateBMI,
  calculateHB: calculateHB,
  calculateIDW: calculateIDW,
  convertUnits: convertUnits,
  roundTwoDecimal: roundTwoDecimal
};

/*
*
*/
export default Nutrition;
export {
  calculateIDW,
  calculateMifflin,
  calculateBMI,
  calculateHB,
  convertUnits,
  roundTwoDecimal
};