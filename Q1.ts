// Write a program to convert the temperature from Celsius to Fahrenheit
// and vice verse.
function celsiusToFahrenheit(celsius: number): number {
    return (celsius * 9/5) + 32;
}

function FahrenheitToCelsius(Fahrenheit: number): number {
    return (Fahrenheit - 32) * 5/9;
}

// Required Metrial
var temperatureincelsius = 25;
var temperatureinfahrenheit = 77;

console.log(`${temperatureincelsius} Celsius is  ${celsiusToFahrenheit(temperatureincelsius)} Fahrenheit`);
console.log(`${temperatureinfahrenheit} Fahrenheit is ${FahrenheitToCelsius(temperatureinfahrenheit)} Celsius`);
