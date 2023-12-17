//Develop a program that determines the day of the week. Ask the user
// for a number (1-7) and use nested if statements to print the
// corresponding day's name.

function getDayOfWeek(dayNumber: number): string {
    if (dayNumber >= 1 && dayNumber <= 7) {
      const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      return daysOfWeek[dayNumber - 1];
    } else {
      return "Invalid day number";
    }
  }
  
  // UserDaysInput
  const userDayInput = 3;
  console.log(`Day ${userDayInput} is ${getDayOfWeek(userDayInput)}`);
  