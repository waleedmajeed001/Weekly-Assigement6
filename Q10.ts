//Write a program that takes the number of units consumed by a user if
// it is greater than 100 then add 10% tax if greater than 200 then add
// 15% of tax so on up to if greater than 500 then add 25% of tax. 
// Where the tax amount will be calculated by the amount of bill.


function calculateTax(unitsConsumed: number): number {
    let taxRate = 0;
    if (unitsConsumed > 500) {
      taxRate = 0.25;
    } else if (unitsConsumed > 200) {
      taxRate = 0.15;
    } else if (unitsConsumed > 100) {
      taxRate = 0.1;
    }
    return taxRate * unitsConsumed;
  }
  
  // Units For User
  const consumedUnits = 300;
  console.log(`Tax for ${consumedUnits} units: ${calculateTax(consumedUnits)} USD`);