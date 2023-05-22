# Function

## In this lesson:

1. Functions = let us reuse code
2. return = get a value out of a function
3. parameters = put a value inside a function
4. Improved the code for rock paper scissors

&nbsp;

## Function
    A function lets us reuse code, 
    They help our code easier to update and fix bugs

We can create function
```js
function function_name(){

    // Function body
    // Write the code Which you want to reuse
    // It doesn't run by itself, we have to call when we want to use
}

// To use the code, just type function_name
// Calling the function
function_name()
```

### SyntaxRules for function

1. We have to mention "function"
```js
function functionName(){
    ...
}
```

2. We can't start a function name with numbers

3. We can't use special charactor except $ and _

>> Tip: Use a action_word/verb for function names

&nbsp;
## Function scopes
    Variables created inside a function{} cannot be used outside functions{}.

>> Variable which are created outside the scope are called global variables.

### Return statement

```js 
function functionName(){
    ...
//  return valueYouWantToReturn
    return 5;
}

console.log(functionName()) // --> 5
```
Functions can return other things like
```js
return 5;
return "str";
return (5 + 5);
return Math.random();
return; //--> undefined
```

>> When we use a return it ends the function immediately i.e the furture code doesn't get executed
>> return means it returns back to where the function is

>> Following the code line-by-line is called "Tracing the code"

&nbsp;
## Parameters

They let us add values <u>into</u> the functions
* They are like variable, we can manipute them

```js
function functionName(parameter1, parameter2){
    // function body
}

>> parameters syntax rules are same as variable syntax
1. They can't use special name
2. can't have numbers in start
3. Can't use special characters and whitespace except _ and $ 

```

### Adding a default value for parameter
if some argument is not passed during function call it will take the default value as parameter

```js

function functionName(parameter1 = 'default_value', parameter2){
    // function body
}

>> Note: Inside the function we can call other functions