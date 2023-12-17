//Write a program that checks if the given year is leap year or not.

function isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }
  
  // Input Year
  const inputYear = 2023;
  console.log(`Is ${inputYear} a leap year? ${isLeapYear(inputYear) ? "Yes" : "No"}`);
  