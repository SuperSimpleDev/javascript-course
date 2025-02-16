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