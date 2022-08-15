/**
 *
 * Function that takes in principal loan amount, annual interest rate and number of years in your loan term and retuns monthly payment
 *
 * Equation
 * M = P[r(1+r)^n/((1+r)^n -1)]
 *
 */
export function monthlyPaymentCalculation(
  principal: number,
  rate: number,
  years: number
): number {
  if (principal <= 0 || rate <= 0 || years <= 0) return 0;

  // number of payments over the loans lifetime.
  // mulitply the number of years in your loan term by 12 to get the number of total paymennts for your loab
  const n = years * 12;

  // monthly interest rate
  // Lenders provide annual rate so divide by 12 to get the monthly rate
  const r = (rate / 100) / 12;

  const numerator = r * Math.pow(1 + r, n);

  const denominator = Math.pow(1 + r, n) - 1;

  const monthlyPayment = principal * (numerator / denominator);

  return Math.ceil(monthlyPayment);
}

/**
 * 
 * Takes in a company name and returns a transformed version to match logo syntax
 * 
 * Alpine Credits -> apline-credits
 * CIBC -> cibc
 * Coast Capital -> coast-capital
 * 
 */
export function transformCompanyName(name: string): string {

  const transformedName = name.toLowerCase().replace(/ /g, "-")

  return transformedName;
}