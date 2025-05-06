# Booleans


## In this lesson
1. Boolean values (true, false)
2. if-statements
3. Comparison Operators (>, <, >=, <=, >=, ===, !==)
Logical Operators (&&, ||, !)
4. Algorithms and created 'Rock Paper Scissors' game
5. Truthy and Falsy values
6. Shortcuts for if-statements (ternary, guard, default)

&nbsp;

Booleans are another type of values:

	A boolean value represent whether something is true or false

- There are 2 type
	true
	false

### Rules for boolean:

1. We don't surround them with "" or '', else they become strings


#### Comparison Operators:

|Symbol|Name|
|---|---|
|>|greater than|
|<|less than|
|>=| greater than or equal to|
|<=|less than or equal to|
|===|equal to|
|!==|not equal to|

> Note: when we use == or != in js, it converts the either to same types and then compares which not a good idea

2. It should be all lowercase

&nbsp;
## Conditions

### if-statements

- Lets us write multiple lines of code 
- and then decides which code to run

```js
// (condition){do when is condition is true}
if (30 >= 15) {
	console.log("Greater")
}
```

### else-statement

- these are handy when we want to do something when if-statements are not `true`

```js
if (30 >= 15) {
	console.log("Greater")
}
else {
	console.log("not greater")
}
```

### else if-statement
- What if we have more than one condition to look for

```js
if (30 >= 15) {
	console.log("Greater")
}

else if (15 >= 14) {
	console.log("Very close enough")
}
else {
	console.log("not greater")
}
```

>> Note: When a condition has only one line of code the we an skip {}

&nbsp;

## Logical operators

- They let us combine boolean values

1. and &&

	For this to satisfy it need both conditions true
```js
console.log(true && true) // true
console.log(false && false) // false
```

2. or ||
	
	It satisfies even if either of condition is true
```js
console.log(true || false) // true
console.log(false || true) // false
```

3. Not !

	It is not operator, it uses one boolean value and flips it.
```js
console.log(!true) // false
console.log(!false) // true
```


> Note: Order of Operations:
>> (...) > */ > +- > Comparison Operator > Logical Operator.
-

Scope:

	They help us avoid naming conflicts
- A scope limits where the variable has to be used

>- Any variable we create inside the {} it exists only there {}

- Scopes are features help us avoid naming conflicts 

> Note: `var` doesn't follow the rules of scope, so we avoid it.

&nbsp;

### Truthy and Falsy values

> Falsy value:
>>  false

>>  0

>>  ''

>>  NaN --> Not a number

>>  undefined --> "defines something that doesn't have a value"

>>  null

Any value not in this list is Truthy value


### Shortcuts for If statements

- Turnary Operator ?:
	
	This is like if else in one line
	
	```js
	let condition = true;
	condition ? "Do this when satisfy" : "do this when doesn't"

	//we can also save the Turnary operator in variable
	const result = condition ? "true" : "false";
 
	```


- Guard Operator &&

	This is like protecting the right side of code

	```js
	true && console.log('The left is true');

	// WE can save the operator in variable
	const result = true && console.log('The left is true');
	```
- Default Operator ||

	This can be handy when you want to set some default values to something

	```js
	const currency1 = "INR" || "USD";
	// This checks if first value exist and then neglects(short-circuits) the rest
	console.log(currency1) // --> INR

	const currency2 = undefined || "USD";
	// This results in false for first value and then takes value as USD
	console.log(currency2) // --> USD
	```