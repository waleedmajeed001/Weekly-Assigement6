//Write a program that checks if the given number is  divisible by 3
// or 5 or both or not divisible by anyone show output accordingly.

function checkDivisibility(num: number): string {
    let result = "";
    if (num % 3 === 0) result += "Divisible by 3 ";
    if (num % 5 === 0) result += "Divisible by 5 ";
    return result.length > 0 ? result : "Not divisible by 3 or 5";
  }
  
  // Given Number
  const givenNumber = 15;
  console.log(checkDivisibility(givenNumber));
  