const conditions = [
  {
    name: 'AKI',
    calDesc: '20 - 30 kcal / kg actual weight \n 25 - 30 kcal / kg non obese critical care',
    protDesc: 'no dialysis 0.8 - 1.0 g / kg actual weight \ndialysis or catabolic 1.0 - 1.5 g / kg actual weight \nreceiving CRRT 1.5 - 1.7 g / kg suggested wieght \ncritical care or hypermetabolic 1.5 - 1.7 g / kg actual weight',
    remarks: '',
  },
 
  {
    name: 'CABG',
    calDesc: 'Mifflin x PAL',
    protDesc: '0.8 - 1.0 g / kg for maintenance\n1.2 - 2.0 g/kg actual weight in critical illness',
    remarks: '',
  },
  {
    name: 'Cancer',
    calDesc: 'Mifflin x PAL',
    protDesc: '1.0 - 1.2 kg current weight',
    remarks: 'varies depending on type of cancer',
  },
  {
    name: 'CHF',
    calDesc: '22 kcal / kg',
    protDesc: '1.1 g / kg',
    remarks: '',
  },
  {
    name: 'CHF - malnourished',
    calDesc: '24 kcal / kg',
    protDesc: '1.4 g / kg',
    remarks: 'consider need for weight loss or gain with calorie needs. Add PAL factor as needed.',
  },
  {
    name: 'COPD',
    calDesc: 'predictive based on level of care - 25 - 35 kcal / kg',
    protDesc: '15 - 20% of total calories',
    remarks: '',
  },
  {
    name: 'COPD - Moderate Stress',
    calDesc: 'predictive based on level of care - 25 - 35 kcal / kg',
    protDesc: '1 - 1.5 g / kg',
    remarks: '',
  },
  {
    name: 'COPD - Severe Stress',
    calDesc: 'predictive based on level of care - 25 - 35 kcal / kg',
    protDesc: '1.6 - 2 g / kg',
    remarks: '',
  },
  {
    name: 'Critical Care - VENT - NONOBESE',
    calDesc: 'Penn State 2003b',
    protDesc: '1.2 - 2.0 g / kg actual weight',
    remarks: '???permissive underfeeding for tube feeding???',
  },
  {
    name: 'Critical Care - VENT - OBESE',
    calDesc: 'Penn State 2003b if less than 60 years old, if older than 60 Penn State 2010',
    protDesc: '2.0+ g / kg if BMI is 30-40, 2.5+ g / kg if BMI > 40',
    remarks: '???permissive underfeeding for tube feeding???',
  },
  {
    name: 'Critical Care - NONVENT',
    calDesc: 'Mifflin x 1.25',
    protDesc: '1.2 - 2.0 g / kg',
    remarks: '???permissive underfeeding for tube feeding???',
  },

  {
    name: 'Obese NONVENT',
    calDesc: 'Mifflin using actual weight (no PAL)',
    protDesc: 'non critical 0.8 - 1.0 g / kg actual weight',
    remarks: '',
  },
  {
    name: 'Obese VENT',
    calDesc: 'if age > 60 PSU 2010, if < 60 PSU 2003',
    protDesc: 'critically care ICU: 2.0+ g / kg ideal weight, if BMI > 40 2.5+ g / kg',
    remarks: '',
  },
  {
    name: 'DM',
    calDesc: 'Mifflin x PAL',
    protDesc: '15-20% daily energy intake, 1.0 - 1.5 g / kg with wounds or malnutrition',
    remarks: '',
  },
  {
    name: 'Dysphagia',
    calDesc: 'Mifflin x PAL',
    protDesc: '0.8 - 1.0 g / kg actual weight',
    remarks: '',
  },
  {
    name: 'Gestational DM',
    calDesc: 'desirable body weight: 13.6 kcal/lb. 120%+ desirable weight: 10.9 kcal/lb. less than 90% desirable weight: 18.2 kcal/lb',
    protDesc: '1.1 g/kg current weight. 0.8 g/kg pre-preg weight + 25g (50g for twins) in 2nd or 3rd trimester. ',
    remarks: 'no less than 1800 kcal at any point',
  },
  {
    name: 'GI Disorders',
    calDesc: 'Mifflin x PAL',
    protDesc: '0.8 - 1.0 g / kg actual weight for adults, 1.0 - 1.23 g/kg for older adults',
    remarks: '',
  },
  {
    name: 'HIV',
    calDesc: 'Mifflin x PAL',
    protDesc: '0.8 - 1.0 g / kg actual weight',
    remarks: '',
  },
  {
    name: 'Liver Disease',
    calDesc: 'Mifflin x PAL',
    protDesc: '0.8 - 1.0 g / kg actual weight',
    remarks: '',
  },
  {
    name: 'Pancreatitis',
    calDesc: 'Mifflin x PAL',
    protDesc: '1.2 - 1.5 g/kg acute, 1.0 - 1.5 g/kg chronic',
    remarks: '',
  },
  {
    name: 'Pressure Injury',
    calDesc: 'Mifflin x PAL or 30 - 35 kcal/kg, 35 - 40 kcal/kg for underweight, 25-30 kcal/kg for obese',
    protDesc: '1.25 - 1.5 g/kg',
    remarks: '',
  },
  {
    name: 'Pregnancy',
    calDesc: '2200 - 2500, +340 - 452 after first trimester, +500 if twins',
    protDesc: '1.1 g/kg current weight. 0.8 g/kg pre-preg weight + 25g (50g for twins) in 2nd or 3rd trimester. ',
    remarks: '',
  },
  {
    name: 'Underweight',
    calDesc: 'Mifflin x PAL',
    protDesc: 'based on disease state and condition, typically higher',
    remarks: '',
  },
];

export default conditions;