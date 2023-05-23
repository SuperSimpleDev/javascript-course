# Objects Lesson 8


&nbsp;

## In this lesson

1. Objects = group related values together
2. Added score to rock Paper Sissors game
3. Built-in objects (JSON, localStorage)
4. More details (null, AutoBoxing, references)
5. Shortcuts (destructing, shorthand property, shorthand methods)


&nbsp;

What is an Object??
  An object groups multiple values together. They are like dictionaries in python

```js
const product = {

//Property Value pair
  name : "Chocolate",
  price : 20,
  isAvailable : true
};

console.log(product) // --> { name: 'Dark Chocolate', price: 20, isAvailable : true}
```

// Accessing a particular value
```js

console.log(product.name)
console.log(product.price)
```

// Changing the value
```js
product.name = "Dark Chocolate";
  //.name --> dot notation
```
Adding a new property
```js
product.new_property = "value";
```

Deleting a property
```js
delete product.new_property;

```

&nbsp;
## Why we use objects:

* Objects are just like variable
* make our code more organised.
* Lets us group multiple values together and use multiple value together

### dot notation

```js
//                🔻 --> dot notation
console.log(product.name)
```
### bracket notation
They help over dot notation when we want to use some special notation

```js
//                🔻     🔻  --> bracket notation
console.log(product['name'])
console.log(product['name-last'])
```

### nesting objects

```js
let product = {
  name : "Laptop",
  price : 52000,
  rating : {
    stars : 4.8;
    count : 143;
  }

// accessing the nested objects
console.log(product.rating.stars)
} 
```
&nbsp;
## Methods : functions inside object

```js
let product = {
  name : "Laptop",
  price : 52000,
  rating : {
    stars : 4.8;
    count : 143;
  },

  fun : function function_name(){
    ...
  }


// accessing the function
product.fun()
} 
```
### Built-in Object

1. JSON (JavaScriptObjectNotation)

* It is same as object by less feature, we can't use 'single_quotes'
* we can't use functions in JSON

Why JSON
* Simpler
* Its universal and accessed by more languges
* We can use to send data between the computers
* We can store data

#### How to convert JS Object to JSON

```js
JSON.stringify(objectYouWantToConvert)
// it convert to string and methods are converted to properties
```

#### How to convert JSON back to JS Object 

```js
JSON.parse(JSONYouWantToConvert)
// it convert to string and methods are converted to properties
```

Variables are temperary, If we refresh it gets deleted  


&nbsp;
## Local storage 
  They store data in local store, they don't get deleted on page refresh

* They only take strings
* 

```js
// setting the item for local storage
localStorage.setitem('score', JSON.stringify(score))
```

```js
// accessing the local storage
localStorage.getitem('score')
```
deleting the local item
```js
localStorage.delete('score')
```

&nbsp;
## Auto-boxing

JS automatically wraps a str into special object then performs functions on it.

```js
console.log("hello".length)
console.log("hello".toUpperCase())
```

>> JS only have reference(shortcut/address) to the address of objects, hence we can't compare direct objects

>> Even with 'const' we can change the object

&nbsp;
## Shortcuts for objects.

1. Destructing shortcut.

```js
const message = user.message;

// Short cut
const {message} = user
```

2. Accessing 2 or more variables from destructing.
```js
const {message, price} = product
console.log(price)
```

3. ShortHand property

```js
const object = {
  message : message

  // Shorthand shortcut
  message // --> works the same
}
```

```js
const object = {
  // method: function function1(){
  //   console.log("HI")
  // }

  // ShortHand shortcut
  method2(){ 
    console.log("HI")
  }
}
```

---