//Write a program that converts given number of days in to weeks and
// days such as 17 days = 2 weeks and 3 days.

function daysToWeeksAndDays(days: number): string {
    const weeks = Math.floor(days / 7);
    const remainingDays = days % 7;
    return `${days} days = ${weeks} weeks and ${remainingDays} days`;
  }
  
  // user Input Days
  var days = 17;
  console.log(daysToWeeksAndDays(days));
  