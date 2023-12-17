//Write a program that calculates the percentage.

function calculatePercentage(value: number, total: number): number {
  return (value / total) * 100;
}
  
// obtainedMarks and totalMarks
var obtainedMarks = 75;
var totalMarks = 100;

console.log(`Percentage: ${calculatePercentage(obtainedMarks, totalMarks)}%`);
