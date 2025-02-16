/* 7a */

function greet() {
  console.log("Hello!");
}

greet();

/* 7b */

function greet(name) {
  console.log(`Hello ${name}!`);
}

greet("Simon");
greet("John");
greet("Angela");

/* 7c */

function greet(name) {
  if (!name) {
    console.log("Hi there!");
  } else {
    console.log(`Hello ${name}`);
  }
 
}

greet("Duygu");
greet("");
greet();

/* 7d */

function convertToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9/5) + 32;
  console.log(`${celsius} degree is ${fahrenheit} fahrenheit.`);
}

convertToFahrenheit(25);

/* 7e */

function convertToCelsius (fahrenheit) {
  let celsius = (fahrenheit -32) * 5 / 9;
  console.log(`${fahrenheit} is ${celsius} celsius.`);
}

convertToCelsius (86);