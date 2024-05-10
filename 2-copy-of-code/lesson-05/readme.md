# Variables

## In this lesson:

1. Variables
2. Re-assign a vaiable
3. How to use js in real application
4. Shortcuts for re-assigning a variable
5. Name conventions and best practices.
6. 3 Ways to create a variable: `let`, `const`, `var`.

<!-- --- -->
&nbsp;

Variable = a container, we can save a value and then use later

```js
let variable_name = 3; //let tell js to create a variable
console.log(variable_name);

// creating a new variable:
let n1 = 5;
let n2 = 4;

// We can perform operation even on two or more variables
console.log(n1 + n2 + 1)
// 			5  + 4  	 + 1
// result --> 10
```

We can even save strings:
```js
let var_string = "String under container";

```

### Syntax rules for variables

Varible name restrictions:

1. We can't use special words
	eg: let let= 1; ❌

2. We can't start a variable name with number, but we can use in middle or end
	eg: 
    ```js
        let 2variable = 5; ❌
		
        let variable2 = 2; ✔
        let va2riable = "hello"; ✔
    ```

3. We can't use all special characters and spaces in variable names
	eg: 
    ```js
        let #variable = 10; ❌
		let vari able = 10; ❌

		// we can use $ and _ inside variable
		let $variable = 4; ✔
		let _variable = "string"; ✔
    ```

> Note: ";" semicolan = end of an instruction, similar to . period in English
```js
// we can add other data after the end of instruction ;
console.log(2); console.log("Hello")
```

### How to change the value or manipulate variables:

```js
let total = 100; // --> Assigning a value to variable 

//changing the variable value
total = 98; // --> reassigning a value to the variable
```
> Note: we don't use `let` again for re-assigning the variable, because let creates a new variable and we already have one variable with same name, it causes errors. Hence only variable name is enough

---
### Name convention

1. camelCase = not using space instead the first letter of word is Capitalized.
> camelCase is standard in JS

2. snake_case = we keep words lowercase and combine with _

3. PascalCase = Same as camelCase instead we capitalize the first charactor.

4. kebab-case = we keep everything small, but add - instead of space
> kebab-case doesn't work in js as '-' is subraction 


Always use variable names that are not too long and understandable.

---
### 3 ways to create variables in JS:

1. let variable_name
```js
let variable_name = 2;
```

2. const variable_name = value;
	* it creates a variable but we cant change the value later

	* we use this make our code safe and easier to understand
```js
// The value cannot be re-assigned
const variable_name = 2;
```

3. var variable_name = value;
	* it was the offical way to create variable, but it comes with some issues in latest js. So we use let

```js
// There are some drawbacks of using this approch in latest JS
var variable_name = 2;
```