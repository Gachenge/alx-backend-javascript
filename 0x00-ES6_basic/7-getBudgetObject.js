/* eslint-disable no-unused-vars */

//object to simply use the keyname

export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita,
  };

  return { income, gdp, capita };
}
