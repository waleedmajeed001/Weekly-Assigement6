// Write a program that takes temperature and check it. If it is cold then suggest the user
// to wear warm clothes and so on according to the weather.

function suggestClothing(temperature: number): string {
    return temperature < 10 ? "Wear warm clothes" : "It's not too cold, dress accordingly";
  }
  
  // Temperature of weather
  var currentTemperature = 5;
  console.log(suggestClothing(currentTemperature));
