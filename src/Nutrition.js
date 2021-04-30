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

function AmputatedPercentage(amputations) {
  var amputationP = 0;
  if (amputations.rightFoot) {
    amputationP += 0.015;
    if (amputations.rightCalf) {
      amputationP += 0.044;
      if (amputations.rightLeg) {
        amputationP += 0.0101;
      }
    }
  }
  if (amputations.leftFoot) {
    amputationP += 0.015;
    if (amputations.leftCalf) {
      amputationP += 0.044;
      if (amputations.leftLeg) {
        amputationP += 0.0101;
      }
    }
  }

  return amputationP;
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
  console.log(amputations)
  const ampct = AmputatedPercentage(amputations);
  if (ampct > 0.0){
    // patient has amputations to consider
    // estimated body weight = observed body weight(after amputations) divided by  one minus the percentage amputated squared
    // user will have to enter the height, since that is potentially affected by amputation
    const wte = weightKG / (1 - ampct);
    return roundTwoDecimal(wte / (meters * meters));
  }
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
  const ampct = AmputatedPercentage(amputations);
  var idw;
  if (overSixty <= 0) {
    if (gender === 'male') {
      idw = 106;
    } else {
      idw = 100;
    }

    if (ampct > 0.0){
      // patient has amputations to consider
      // ideal weight is reduced by percentage calculated above
      return idw - (idw * ampct)
    }
    return idw;
  }

  
  if (gender === 'male') {
    idw = (106 + (6 * overSixty));
  } else {
    idw =  (100 + (5 * overSixty));
  }
  if (ampct > 0.0){
    // patient has amputations to consider
    // ideal weight is reduced by percentage calculated above
    return idw - (idw * ampct);

  }
  return idw;


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
  AmputatedPercentage: AmputatedPercentage,
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
  AmputatedPercentage,
  calculateIDW,
  calculateMifflin,
  calculateBMI,
  calculateHB,
  convertUnits,
  roundTwoDecimal
};